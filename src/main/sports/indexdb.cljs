(ns sports.indexdb
  (:require [indexed.db :as db]
            [sports.state :as state]
            [sports.firebase.exercise :as fe]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]
            ))


(declare get-firebase-exercise)


(defn update-exercise-group!
  "update :exercise/groups value from store
  to provide function and vals"
  [f & vals]
  (swap! state/store update :exercise/groups #(apply f % vals)))


(defn set-exercise-loading!
  [val]
  (swap! state/store assoc :exercise/loading val))

(defn set-exercise-group!
  [groups]
  (swap! state/store #(assoc % :exercise/groups groups)))

(defn sync-firebase-exercise
  "sync firebase exercise to indexdb"
  []
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
            (let [index-db (state/get-index-db)
                  trans (db/transaction index-db ["exercises"] "readwrite")
                  store (db/object-store trans "exercises")]
              (db/add store (clj->js group))
              )))
      (get-firebase-exercise)
      (catch js/Error e (js/console.log e)))))

;; (def exercises (atom (transient [])))
(def retry (atom false))
(defn set-exercises-from-indexdb
  "
   if can't load data from index-db,
   will retry once.a
  "
  [e]
  (let [cursor (-> (.-target e)
                   (db/create-request)
                   (db/result)
                   )]
    (if (nil? cursor)
      (do
        (update-exercise-group! persistent!)
        (when (and
               (not @retry)
               (= (count (state/get-exercise-groups)) 0))
          (js/console.log "[INFO] try to get from firebase.")
          (reset! retry true)
          (sync-firebase-exercise)
          )
        (set-exercise-loading! "success"))
      (do
        (update-exercise-group! conj!
                                (-> (db/create-cursor-with-value cursor)
                                    (db/value)
                                    (js->clj :keywordize-keys true)))
        (-> (db/create-cursor-with-value cursor)
            (db/continue))
        ))
    )
  )

(defn get-firebase-exercise
  "get firebase exercise from indexdb.
  "
  []
  (set-exercise-loading! "loading")
  (set-exercise-group! (transient []))

  (try
    (let [index-db (state/get-index-db)
          trans (db/transaction index-db ["exercises"] "readwrite")
          store (db/object-store trans "exercises")]
      (let [cur (-> (db/open-cursor store)
                    (db/on "success" set-exercises-from-indexdb))]
        )
      )
    (catch js/Error e (js/console.log e)))
  )





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
  (sync-firebase-exercise))

(defn handle-success
  [idb]
  (sports.state/set-index-db
   (-> idb
       (db/result)
       (db/create-database)))
  (get-firebase-exercise)

  )

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

(defn setup-index-db
  []
  (js/setTimeout #(connect-index-db) 1000)
  )


#_(
   (:exercise/groups @state/store)
   (get-firebase-exercise)
   (setup-index-db)
   (doc db/get-request)
   (doc db/result)
   (doc db/create-request)
   (doc db/create-cursor-with-value)
   (doc db/get-request)
   (sync-firebase-exercise)
   (require '[cljs.repl :refer [doc]])
   (doc go)

   ,)
