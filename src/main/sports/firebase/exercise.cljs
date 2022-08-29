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
;; (defn add-exercise!
;;  [data uid]
;;  (-> (doc (get-firestore) "records" "user" uid (:id data))
;;      (setDoc (clj->js (assoc data :uid uid)))))

(defn add-exercise!
  [data]
  (-> (collection (get-firestore) "records")
      (addDoc data)))

;;(defn get-exercise
;;  [uid date name]
;;  (let [docRef (collection (get-firestore) "records" "user" uid)
;;        query (query docRef (where "date" "==" date) (where "exercise" "==" name))]
;;    (-> (getDocs query)
;;        (.then (fn [data]
;;                  (-> (.-docs data)
;;                      (.map #(.data %)))))
;;        (.catch #(do (js/console.log %))))))

(defn get-exercises
  [uid date exerciseId]
  (let [collection (collection "records")
        query (query collection
                     (where "date" "==" date)
                     (where "exerciseId" "==" exerciseId)
                     (where "uid" "==" uid))]
    (-> (getDocs query)
        (.then (fn [data]
                 (-> (.-docs data)
                     (.map #(.data %)))))
        (.catch #(do (js/console.log %))))))

;; (defn delete-exercise!
;;  [uid id]
;;  (let [docRef (doc (get-firestore) "records" "user" uid id)]
;;    (deleteDoc docRef)))

(defn delete-exercise!
  [id]
  (let [docRef (doc (get-firestore) "records" id)]
    (deleteDoc docRef)))

(comment
  (init-app)
  )
