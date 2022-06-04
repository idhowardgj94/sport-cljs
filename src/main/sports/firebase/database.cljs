(ns sports.firebase.database
  (:require
   ["regenerator-runtime/runtime"]
   ["date-and-time" :as date]
   ["firebase/database" :as database :refer [limitToLast get query orderByChild getDatabase ref set onValue equalTo]]
   [sports.firebase.setup :refer [init-app]]
   [sports.state :as s :refer [store]]))

(defn- get-database
  "wrap for getDatabase"
  []
  (getDatabase))

(def unit-kg "kg")
(def unit-lbs "lbs")
;; not a good solution.
(defn- get-date-format
  "convert js Date format to YYYY-MM-DD"q
  [d]
  (.format date d "YYYY-MM-DD"))

;; done
(defn insert-training-record
  "insert training record,
   string Date string string string unit"
  [uid date train-name weight repeat unit]
  (-> (ref (get-database) (str "training/users" uid "/" (random-uuid)))
      (set (clj->js {:uid uid
                     :date (get-date-format date)
                     :trainName train-name
                     :weight weight
                     :repeat repeat
                     :unit unit}))))

(defn insert-training-group
  "insert train group"
  [group-name train-name]
  (-> (ref (get-database) (str "training/groups/" (random-uuid)))
      (set (clj->js {:groupName group-name
                     :trainName train-name}))))

(insert-training-group "胸" "啞鈴上胸")

(defn get-chest-test
  []
  (let [db (ref (get-database) "training/groups")]
    (query db (orderByChild "groupName"))))

(-> (get-chest-test)
    (database/get)
    (.then #(do (js/console.log (-> (.equalTo % "胸")
                                    (.val)))
                (js/console.log "QQ"))))

#_(init-app)