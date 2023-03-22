(ns sports.indexdb
  (:require [indexed.db :as db]
            [sports.state :as state]
            [sports.firebase.exercise :as fe]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]
            [re-frame.core :as re-frame]
            [sports.events :as events]))


(declare get-firebase-exercise)

(defn sync-firebase-exercise
  "sync firebase exercise to indexdb"
  [index-db]
  (go
    (try
      (let [groups (<p! (fe/get-groups))
            groups' (atom groups)]
        ;; prepare exercises, which is group + exercises
          (doseq [group groups]
            (let [group-exercises (<p! (fe/get-exercise-items (:id group)))]
              (swap! groups' (fn [lt]
                                 (->> lt
                                      (map #(if (= (:id %) (:id group))
                                              (assoc % :exercises group-exercises)
                                              %)))))))
          ;; add to index-db
          (doseq [group @groups']
            (let [trans (db/transaction index-db ["exercises"] "readwrite")
                  store (db/object-store trans "exercises")]
              (db/put store (clj->js group)))))
      (re-frame/dispatch [::events/get-exercise-from-indexdb])
      (catch js/Error e (js/console.log e)))))

;; (def exercises (atom (transient [])))
(def retry (atom false))
(def exercise-groups (atom (transient [])))
(defn set-exercises-from-indexdb
  "
   cursor-handler
   if can't load data from index-db,
   will retry once.
  "
  [e]
  (let [cursor (-> (.-target e)
                   (db/create-request)
                   (db/result))]
    (if (nil? cursor)
      (do
        (swap! exercise-groups persistent!)
        (if (and (not @retry) (= (count @exercise-groups) 0))
          (do (reset! retry true)
              (re-frame/dispatch [::events/sync-index-db-firebase-exercise]))
          (do (re-frame/dispatch [::events/set-exercise-groups @exercise-groups]))))

      (do (swap! exercise-groups conj!
                 (-> (db/create-cursor-with-value cursor)
                     (db/value)
                     (js->clj :keywordize-keys true)))
          (-> (db/create-cursor-with-value cursor)
              (db/continue))))))

(defn get-firebase-exercise
  "get firebase exercise from indexdb.
  "
  [index-db]
  (re-frame/dispatch [::events/set-exercise-loading "loading"])
  (reset! exercise-groups (transient []))
  (try
    (let [trans (db/transaction index-db ["exercises"] "readwrite")
          store (db/object-store trans "exercises")]
      (let [cur (-> (db/open-cursor store)
                    (db/on "success" set-exercises-from-indexdb))]))
    (catch js/Error e (js/console.log e))))


(defn handle-error
  [e]
  (js/console.log e "inside handle error!"))

(defn handle-upgrade
  [e]
  (-> (db/create-version-change-event e)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "exercises" {:key-path "id"}))
  (js/console.log "[info] sync from db")
  (re-frame/dispatch [::events/sync-index-db-firebase-exercise]))

(defn handle-success
  [idb]
  (let [db-object (-> idb
                      (db/result)
                      (db/create-database))]
    (sports.state/set-index-db db-object)
    (re-frame/dispatch [::events/set-index-db db-object])
    (re-frame/dispatch [::events/get-exercise-from-indexdb])))

(defn handle-blocked
  []
  (js/console.log "inside handle block"))

(defn connect-index-db
  "setup indexdb, and store the indexdb object in the indexdb atom"
  []
  (when-not (state/get-index-db)
    (as-> (db/open "exercises" 1) $
        (db/on $ "error" handle-error)
        (db/on $ "blocked" handle-blocked)
        (db/on $ "upgradeneeded" handle-upgrade)
        (db/on $ "success" #(handle-success $)))))

(defn setup-index-db-effect
  []
  (re-frame/reg-fx
   :setup-index-db
   (fn [_]
     (connect-index-db))))

(defn get-from-index-db-effect
  []
  (re-frame/reg-fx
   :get-from-index-db
   (fn [index-db]
     (get-firebase-exercise index-db))))

(defn sync-firebase-effect
  []
  (re-frame/reg-fx
   :sync-index-db-from-firebase
   (fn [index-db]
     (sync-firebase-exercise index-db))))

(defn reg-index-db-effect
  []
  (sync-firebase-effect)
  (setup-index-db-effect)
  (get-from-index-db-effect))
