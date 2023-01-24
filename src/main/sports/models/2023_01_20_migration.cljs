(ns main.sports.models.a-2023-01-23-migration
  (:require [spec-tools.core :as st]
            [cljs.spec.alpha :as s]
            [sports.models.exercise :as model]
            [goog.object :as o]
            ["regenerator-runtime/runtime"]
            [sports.firebase.setup :refer [init-app]]
            ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
            [spec-tools.data-spec :as ds]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [sports.util :as util]))


 ;; add exercise_group and exercises into db.

(defrecord Group [id name])
(defrecord ExreciseItem [id name])

;; below is data we have now
;; add it to db.
(def sample [{:id 1
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

(def group
  {:id int?
   :name string?})

(def exercise-item
  {:id string?
   :name string?})

(def group-spec
  (ds/spec
   {:name ::group
    :spec group}))

(def exercise-item-spec
  (ds/spec {:name ::exercise-item
            :spec exercise-item}))
(def group-data (atom []))
(def exercise-data (atom []))
;; group-data
(defn prepare-db-data
  "prepare db data by default value given above"
  []
  (doseq [it sample]
    (print it)
    (let [check (s/assert group-spec (select-keys it [:id :name]))]
      (swap! group-data conj (select-keys it [:id :name]))
      )
    (print "\n"))
  (doseq [g sample
          it (:exercises g)]
    (s/assert exercise-item-spec (select-keys it [:id :name]))
    (swap! exercise-data conj (assoc (select-keys it [:id :name]) :gid (g :id)))
    (print it "\n")))

(defn get-docs-with-id
  [data]
  (js/console.log "inside get-docs-with-id")
  (as-> (.-docs data) $
    (.map $ #(let [data (.data %)]
               (o/set data "id" (.-id %))
               data))))

;; add groups into firebase
(go
  (let [collection (collection (getFirestore) "groups")]
    (try
      (doseq [it @group-data]
             (print it)
             (let [res (<p! (addDoc collection (clj->js it)))]
               (js/console.log res)))
      (catch js/Error e (js/console.log e)))))

(go
  (let [collection (collection (getFirestore) "exerciseItems")]
    (try
      (doseq [it @exercise-data]
        (let [res (<p! (addDoc collection (clj->js it)))]
          (js/console.log res)))
      (catch js/Error e (js/console.log e)))))
;; add exercise data into firebase

@group-data
@exercise-data
#_(
   (require '[cljs.repl :refer [doc]])
   (s/explain group-spec {:id 123 :name "aoeeaooae"})
   ,)
