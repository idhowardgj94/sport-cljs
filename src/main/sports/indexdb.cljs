(ns sports.indexdb
  (:require [indexed.db :as db]
            [sports.state :as state]
            [sports.actions :as actions]
            [sports.firebase.exercise :as fe]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]
            [sports.actions :as actions]))

;; (def exercises (atom (transient [])))
(defn set-exercises-from-indexdb
  [e]
  (js/console.log "primite" e)
  (let [cursor (-> (.-target e)
                   (db/create-request)
                   (db/result)
                   )]
    (if (nil? cursor)
      (do
        (actions/update-exercise-group! persistent!)
        (actions/set-exercise-loading! "success"))
      (do
        (actions/update-exercise-group! conj!
               (-> (db/create-cursor-with-value cursor)
                   (db/value)
                   (js->clj :keywordize-keys true)))
        (-> (db/create-cursor-with-value cursor)
            (db/continue))
        ))
    )
  )

(defn get-firebase-exercise
  "get firebase exercise from indexdb"
  []
  (actions/set-exercise-loading! "loading")
  (actions/set-exercise-group! (transient []))
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





(defn handle-error
  []
  (js/console.log "inside handle error"))

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
  (js/console.log "inside success")
  (js/console.log idb)
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
  (js/console.log "inside connect-index-db")
  (when-not (state/get-index-db)
    (as-> (db/open "exercises" 1) $
        (db/on $ "error" handle-error)
        (db/on $ "blocked" handle-blocked)
        (db/on $ "upgradeneeded" handle-upgrade)
        (db/on $ "success" #(handle-success $)))))

(defn setup-index-db
  []
  (connect-index-db)
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
