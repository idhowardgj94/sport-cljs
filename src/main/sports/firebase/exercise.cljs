(ns sports.firebase.exercise
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore where query]]))

(defn get-firestore
  "getFirestore wrapper"
  []
  (getFirestore))

;; {:group "back", :exercise "dumbell row", :repeat "40", :id "0f1ce067-e55b-49e9-ad42-dc622dd27984"}
(defn add-exercise!
  [data uid]
  (js/console.log "add to db")
  (-> (doc (get-firestore) "records" (:id data))
      (setDoc (clj->js (assoc data :uid uid)))))