(ns sports.firebase.realtime-db
  (:require
   ["regenerator-runtime/runtime"]
   ["date-and-time" :as date]
   ["firebase/database" :as database :refer [limitToLast get query orderByChild getDatabase ref set onValue equalTo]]
   [sports.firebase.setup :refer [init-app]]
   [sports.state :as s :refer [store]]))

;; TODO: This is a collection for testing firebase realtime-database.
;; find out that it may not fitable for data store, 
;; so put the experiment code here.
;; will find another to use... or not lol


(defn- get-database
  "wrap for getDatabase"
  []
  (getDatabase))

(def unit-kg "kg")
(def unit-lbs "lbs")
;; not a good solution.

(defn- get-date-format
  "convert js Date format to YYYY-MM-DD"
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
  (-> (ref (get-database) (str "/training/groups"))
      (database/push)
      (set (clj->js {
                     :groupName group-name
                     :trainName train-name}))))

(init-app)
(insert-training-group "胸" "啞鈴上胸")
(insert-training-group "胸" "槓鈴平胸")
(insert-training-group "胸" "槓鈴下胸")
(insert-training-group "背" "滑輪機划船")
(defn get-chest-test
  []
  (let [db (ref (get-database) "/training/groups")]
    (-> (query db  (orderByChild "groupName") (equalTo "胸")))))

(-> (get-chest-test)
    (database/get)
    (.then #(do (js/console.log (.val %))
                ))
    (.catch #(js/console.log %)))


(-> (get-chest-test)
    (database/get)
    (.then #(do (js/console.log (-> (.equalTo % "胸")
                                    (.val)))
                (js/console.log "QQ"))))

#_(init-app)