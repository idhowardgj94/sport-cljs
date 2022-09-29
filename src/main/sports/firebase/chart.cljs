(ns sports.firebase.chart
  (:require
   [sports.models.exercise :as model]
   [sports.util :refer [orginize-js-data json->edn]]
   [goog.object :as o]
   ["regenerator-runtime/runtime"]
   [sports.firebase.setup :refer [init-app]]
   ["firebase/firestore" :as firestore :refer
    [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]))

(defn get-exercise-by-startdate-and-enddate
  [uid exercise-id start end]
  (let [collection (collection (getFirestore) "records")
        query (query collection
                     (where "uid" "==" uid)
                     (where "exerciseId" "==" exercise-id)
                     (where "date" ">=" (js/Date. start))
                     (where "date" "<=" (js/Date. end)))]
    (-> (getDocs query)
        (.then orginize-js-data))))

;; Note: usage example
#_(-> (get-exercise-by-startdate-and-enddate "BC7Eplqe9NftRiirrjakIvHMvRx2"
                                       "barbell-row"
                                       "2022-08-01"
                                       "2022-09-01")
    (.then #(json->edn %))
    (.then #(reset! data %)))

