(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercise delete-exercise!]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  (js/console.log "inside add exercise record!")
  (js/console.log (clj->js data))
  (js/console.log (.-uid (:user @store)))
  (when-let [uid (.-uid (:user @store))] 
    (add-exercise! data, uid)))

(defn get-exercises-by-date
  [date name]
  (js/console.log "inside exercise.")
  (js/console.log name)
  (when-let [uid (.-uid (:user @store))]
    (get-exercise uid date name)))

(defn delete-exercise-by-id!
  [id]
  (when-let [uid (.-uid (:user @store))]
    (delete-exercise! uid id)))