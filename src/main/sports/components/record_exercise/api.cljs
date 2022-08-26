(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercise delete-exercise!]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  ;; Store has a key :user, which store user info get from firebase
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
;; TODO: delete me
(defn first-test
  "This is just a demo test
  Get a value, and directly return"
  [val] val)
