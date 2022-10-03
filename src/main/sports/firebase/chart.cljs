(ns sports.firebase.chart
  (:require
   [sports.util :refer [organize-js-data json->edn]]
   [goog.object :as o]
   ["regenerator-runtime/runtime"]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.models.chart :as model]
   ["firebase/firestore" :as firestore :refer
    [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
   ))

(defn get-exercise-by-startdate-and-enddate
  [uid exercise-id start end]
  (let [collection (collection (getFirestore) "records")
        query (query collection
                     (where "uid" "==" uid)
                     (where "exerciseId" "==" exercise-id)
                     (where "date" ">=" (js/Date. start))
                     (where "date" "<=" (js/Date. end)))]
    (-> (getDocs query)
        (.then #(organize-js-data %))
        (.then #(json->edn %))
        (.then #(model/data-group-by-date %))
        (.then #(->> %
                (model/get-chart-data)
                )))))

;; Note: usage example
#_(-> (get-exercise-by-startdate-and-enddate "BC7Eplqe9NftRiirrjakIvHMvRx2"
                                       "barbell-row"
                                       "2022-08-01"
                                       "2022-09-01")
    (.then #(json->edn %))
    (.then #(reset! data %)))
