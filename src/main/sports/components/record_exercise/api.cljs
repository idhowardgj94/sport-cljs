(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercise delete-exercise!]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  (when-let [uid (.-uid (:user @store))] 
    (add-exercise! data, uid)))

(defn get-exercises-by-date
  [date name]
  (when-let [uid (.-uid (:user @store))]
    (get-exercise uid date name)))

(defn delete-exercise-by-id!
  [id]
  (when-let [uid (.-uid (:user @store))]
    (delete-exercise! uid id))
  )
