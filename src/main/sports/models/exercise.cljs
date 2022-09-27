(ns sports.models.exercise
  (:require [cljs.spec.alpha :as s]
            [spec-tools.core :as st]
            [spec-tools.data-spec :as ds]))

(def group [{:id 1
             :name "leg"
             :exercises 
             [{:id "front-squat"
               :name "front squat"}
              {:id "back-squat"
              :name "back squat" }
              {:id "leg-press"
              :name "leg press" } 
              {:id "leg-curl"
              :name "leg curl"}
              {:id "calf-raise"
              :name "calf raise" }]}
            {:id 2
             :name "back"
             :exercises 
             [{:id "lat-pulldown"
               :name "lat pulldown"}
              {:id "dumbell-row"
               :name "dumbell row"}
              {:id "barbell-row"
               :name "barbell row"}]}
            {:id 3
             :name "chest"
             :exercises 
             [{:id "barbell-literal-press"
               :name "barbell literal press"}
              {:id "barbell-incline-press"
               :name "barbell incline press"}
              {:id "barbell-decline-press"
               :name "barbell decline press"}
              {:id "dumbell-literal-press"
               :name "dumbell literal press"}
              {:id "dumbell-incline-press"
               :name "dumbell incline press"}
              {:id "dumbell-decline-press"
               :name "dumbell decline press"}]}
            {:id 4
             :name "shoulder"
             :exercises
             [{:id "dumbell-literal-fly"
               :name "dumbell literal fly"} 
              {:id "dumbell-incline-fly"
               :name "dumbell incline fly"}
              {:id "dumbell decline-fly"
               :name "dumbell decline fly"}]}])

;; Object { groupId: 1, exerciseId: "front-squat", weight: "50", repeat: "10", date: "2022-09-14", uid: "mgVoZfrY3SCaacfGeDl6ykpAiZSx" }
;; exercise.cljs:15:27
;; data-spec
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
