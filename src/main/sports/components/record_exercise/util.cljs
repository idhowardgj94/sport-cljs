(ns sports.components.record-exercise.util
  (:require
   ["date-fns" :as _]
   [sports.state :refer [get-exercise-groups]]))

(defn get-date-format
  "Input: js/Date, output yyyy-mm-dd"
  [d]
  (.format _ d "yyy-MM-dd"))

(defn get-today
  "This function get today date in yyy-MM-dd format"
  []
  (.format _ (js/Date.) "yyyy-MM-dd"))

(defn get-group-by-id
  [id]
  (->> (get-exercise-groups)
      (filter #(= (:id %) id))
      (first)))

(defn is-nan
  [text]
  (js/isNaN (js/parseInt text)))

(defn get-group-name-by-id
  "
  Input: string or int of string
  output: date string (directly output) or group name (use get-group-by-id)
  "
  [n]
  (-> (get-group-by-id (js/parseInt n))
      (:name)))

(defn get-exercises-by-group-id
  [id]
  (->> (get-exercise-groups)
       (filter #(= (:id %) (js/parseInt id)))
       (#(:exercises (nth % 0)))))

