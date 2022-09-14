(ns sports.models.exercise
  (:require [cljs.spec.alpha :as s]
            [sports.components.record-exercise.event :as event]))

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

;; Note: validation.
(s/def :ExerciseRecord/groupId int?)
(s/def :ExerciseRecord/exerciseId string?)
(s/def :ExerciseRecord/weight string?)
(s/def :ExerciseRecord/repeat string?)
(s/def :ExerciseRecord/date string?)
(s/def :ExerciseRecord/uid string?)
(s/def :ExerciseRecord/id string?)

(s/def ::ExerciseRecord
  (s/keys
   :req-un [:ExerciseRecord/id
            :ExerciseRecord/groupId
            :ExerciseRecord/exerciseId
            :ExerciseRecord/weight
            :ExerciseRecord/repeat
            :ExerciseRecord/date
            :ExerciseRecord/uid]))


(defrecord ExerciseRecord [id groupId exerciseId weight repeat date uid])

(defn newExerciseRecord
  "generate exerciseRecord from map"
  [m]
  (s/conform ::ExerciseRecord (map->ExerciseRecord m)))


;; (map->ExerciseRecord
;;  { :groupId 1 :exerciseId "front-squat" :weight "50" :repeat "10" :date "2022-09-14" :uid "mgVoZfrY3SCaacfGeDl6ykpAiZSx" })
