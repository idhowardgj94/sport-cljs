(ns sports.indexdb
  (:require [indexed.db :as db]
            [sports.state :as state]
            [sports.firebase.exercise :as fe]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]))


(defn handle-error
  []
  (js/console.log "inside handle error"))

(defn handle-upgrade
  [e]
  (-> (db/create-version-change-event e)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "exercises" {:key-path "id"})))

(defn handle-success
  [idb]
  (js/console.log "inside success")
  (js/console.log idb)
  (sports.state/set-index-db
   (-> idb
       (db/result)
       (db/create-database))))

(defn handle-blocked
  []
  (js/console.log "inside handle block"))

(defn setup-index-db
  "setup indexdb, and store the indexdb object in the indexdb atom"
  []
  (js/console.log "inside setup-index-db")
  (when-not (state/get-index-db)
    (as-> (db/open "exercises" 1) $
        (db/on $ "error" handle-error)
        (db/on $ "blocked" handle-blocked)
        (db/on $ "upgradeneeded" handle-upgrade)
        (db/on $ "success" #(handle-success $)))))

(defn sync-firebase-exercise
  "sync firebase exercise to indexdb"
  []
  (go
    (try
      (let [groups (<p! (fe/get-groups))]
        ;; prepare exercises, which is group + exercises
        (let [groups' (atom groups)]
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
              ))))
      (catch js/Error e (js/console.log e)))))

#_(
   (setup-index-db)
   (sync-firebase-exercise)
   (require '[cljs.repl :refer [doc]])
   (doc go)
   ,)
