(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise! get-exercises delete-exercise!]]
   [sports.components.record-exercise.util
    :refer [get-date-format]]))

(defn add-exercise-record!
  [data]
  ;; Store has a key :user, which store user info get from firebase
  (-> data
      (add-exercise!)))

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
  [date exercise-id uid]
  (let [d (get-js-date date)]
    (get-exercises uid d exercise-id)))

(defn delete-exercise-by-id!
  [id]
  (delete-exercise! id))
