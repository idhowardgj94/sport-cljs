(ns sports.firebase.database
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/firestore" :as firestore :refer [collection addDoc getDocs getFirestore where query]]))

(defn get-firestore
  "getFirestore wrapper"
  []
  (getFirestore))

(-> (collection (get-firestore) "users")
    (addDoc (clj->js {:first "Ada"
                      :last "Lovelace"
                      :born 1815})))

(-> (collection (get-firestore) "users")
    (query (where "first" "==" "Ada"))
    (getDocs)
    (.then #(do (js/console.log %)
                (-> %
                    (.forEach (fn [d] (js/console.log (.data d))))))))
#_(init-app)