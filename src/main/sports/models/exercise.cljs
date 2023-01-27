(ns sports.models.exercise
  (:require [cljs.spec.alpha :as s]
            [spec-tools.core :as st]
            [spec-tools.data-spec :as ds]))

;; TODO: groups -> group
(def groups
  {:id int?
   :name string?})

(def exercise-item
  {:id string?
   :name string?})

(def group-spec
  (ds/spec
   {:name ::group
    :spec groups}))

(def exercise-item-spec
  (ds/spec {:name ::exercise-item
            :spec exercise-item}))

(def exercise-record
  {:groupId int?
   :exerciseId string?
   :weight string?
   :repeat string?
   :date (fn [i] instance? i (js/Date))
   :uid string?
   (ds/opt :id)  string?})

(def exercise-record-spec
  (ds/spec
   {:name ::exercise-record
    :spec exercise-record}))


(defrecord ExerciseRecord [id groupId exerciseId weight repeat date uid])

(defn newExerciseRecord
  "generate exerciseRecord from map"
  [m]
  (s/conform exercise-record-spec (map->ExerciseRecord m)))
