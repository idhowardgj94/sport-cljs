(ns sports.firebase.exercise
  (:require
   [sports.models.exercise :as model]
   [goog.object :as o]
   ["regenerator-runtime/runtime"]
   [sports.firebase.setup :refer [init-app]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]))

(defn get-firestore
  "getFirestore wrapper"
  []
  (getFirestore))

(defn add-exercise!
  [data]
  (js/console.log (clj->js data))
  (-> (collection (get-firestore) "records")
      (addDoc (clj->js data ))))

(defn get-exercises
  [uid date exercise-id]
  (let [collection (collection (get-firestore) "records")
        query (query collection
                     (where "date" "==" date)
                     (where "exerciseId" "==" exercise-id)
                     (where "uid" "==" uid))]
    (-> (getDocs query)
        (.then (fn [data]
                 (as-> (.-docs data) $
                     (.map $ #(let [data (.data %)]
                                (o/set data "id" (.-id %))
                                data))
                     (js->clj $ :keywordize-keys true)
                     (map model/newExerciseRecord $))))
        (.catch #(do (js/console.error %))))))

(defn delete-exercise!
  [id]
  (let [docRef (doc (get-firestore) "records" id)]
    (deleteDoc docRef)))

(comment
  (init-app)
  )
