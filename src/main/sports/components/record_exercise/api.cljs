(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercises delete-exercise!]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  ;; Store has a key :user, which store user info get from firebase
  (when-let [uid (.-uid (:user @store))]
    (-> (assoc data :uid uid)
        (add-exercise!))))

(defn get-exercises-by-date
  [date exercise-id]
  (when-let [uid (.-uid (:user @store))]
    (get-exercises uid date exercise-id)))

(defn delete-exercise-by-id!
  [id]
    (delete-exercise! id))

;; TODO: delete me
(defn first-test
  "This is just a demo test
  Get a value, and directly return"
  [val] val)
