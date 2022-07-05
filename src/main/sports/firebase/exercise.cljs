(ns sports.firebase.exercise
  (:require
   ["regenerator-runtime/runtime"]
   [sports.firebase.setup :refer [init-app]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]))

(defn get-firestore
  "getFirestore wrapper"
  []
  (getFirestore))

;; {:group "back", :exercise "dumbell row", :repeat "40", :id "0f1ce067-e55b-49e9-ad42-dc622dd27984"}
(defn add-exercise!
  [data uid]
  (js/console.log "add to db")
  (-> (doc (get-firestore) "records" "user" uid (:id data))
      (setDoc (clj->js (assoc data :uid uid)))))

(defn get-exercise
  [uid date name]
  (let [docRef (collection (get-firestore) "records" "user" uid)
        query (query docRef (where "date" "==" date) (where "exercise" "==" name))]
    (-> (getDocs query)
        (.then (fn [data]
                  (-> (.-docs data)
                      (.map #(.data %)))))
        (.catch #(do (js/console.log %))))))

(defn delete-exercise!
  [uid id]
  (let [docRef (doc (get-firestore) "records" "user" uid id)]
    (deleteDoc docRef)))

(comment
  (init-app)
  )