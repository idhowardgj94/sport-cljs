(ns sports.firebase.database
  (:require
   ["regenerator-runtime/runtime"]
   [sports.firebase.setup :refer [init-app]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore where query]]))

(defn get-firestore
  "getFirestore wrapper"
  []
  (getFirestore))
;; {:group "back", :exercise "dumbell row", :repeat "40", :id "0f1ce067-e55b-49e9-ad42-dc622dd27984"}
(defn add-exercise-record!
  []
  (-> (doc (get-firestore) "records" "test")
      (setDoc (clj->js {:group "back",
                        :exercise "dumbell row",
                        :repeat "40",
                        :id "0f1ce067-e55b-49e9-ad42-dc622dd27984"}))))

(add-exercise-record!)
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
(comment
(init-app) 
  ,)
