(ns sports.actions
  (:require
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.firebase.chart :refer [get-exercise-by-startdate-and-enddate]]
   [sports.state :refer [store]]))

(defn set-exercise-group!
  [groups]
  (swap! store #(assoc % :exercise/groups groups)))

(defn get-chart-data-by-group!
  "get chart data by group
  This function recieved four params: a uid, a vector of exercises which is belong to a group
  startdate (js Date) and enddate(js date)"
  [uid exercises startdate enddate]
  (js/console.log "inside get-chart-data-by-group!" (clj->js exercises))
  (swap! store #(assoc % :chart/state "init"))
  (swap! store #(assoc % :chart/data []))
  (go
    (try
      (doseq [it exercises]
        (js/console.log "exercises: " it)
        (let [data (<p! (get-exercise-by-startdate-and-enddate
                         uid (:id it) startdate enddate))]
          ;; if length not 0, swap to store.
          (if-not (= (.-length (clj->js data)) 0)
            (swap! store (fn [state] (update state :chart/data
                                             #(conj % {:data data :name (:name it)})))))))
      (swap! store #(assoc % :chart/state "done"))
      (catch js/Error e (js/console.log (ex-cause e))))))
@store
;;(get-chart-data-by-group!
;; "BC7Eplqe9NftRiirrjakIvHMvRx2" test-data (js/Date. "2022-08-01") (js/Date. "2022-09-01"))
