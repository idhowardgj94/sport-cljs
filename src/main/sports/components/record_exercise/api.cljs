(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercises delete-exercise!]]
   [sports.components.record-exercise.util
    :refer [get-date-format]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  ;; Store has a key :user, which store user info get from firebase
  (when-let [uid (.-uid (:user @store))]
    (-> (assoc data :uid uid)
        (add-exercise!))))

(defn get-js-date
  "input: string or js/Date
  return: date with time 00:00:00 in GMT+0"
  [date]
  (cond
    (instance? js/Date date) (js/Date. (get-date-format date))
    (string? date) (js/Date. date)
    :else (js/Error "date need to be Date or string")))

(defn get-exercises-by-date
  "return: ExerciseRecord model
  date need to be either string or Date.
  "
  [date exercise-id]
  (let [d (get-js-date date)]
    (when-let [uid (.-uid (:user @store))]
      (get-exercises uid d exercise-id))))

(defn delete-exercise-by-id!
  [id]
    (delete-exercise! id))

;; TODO: delete me
(defn first-test
  "This is just a demo test
  Get a value, and directly return"
  [val] val)
