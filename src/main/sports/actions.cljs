(ns sports.actions
  (:require
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.firebase.chart :refer [get-exercise-by-startdate-and-enddate]]
   [sports.state :refer [store]]
   ["date-fns" :refer [endOfToday]]))

;; chart_page actions
(defn get-monthly-duration
  "Aim to get monthly duration, start from today"
  []
  (let [start (endOfToday)]
    (.setDate start (- (.getDate start) 31))
    (swap! store #(do (assoc % :chart/end-date (endOfToday)
                             assoc % :chart/start-date start)
                      ))))

(defn set-exercise-group!
  [groups]
  (swap! store #(assoc % :exercise/groups groups)))

(defn get-chart-data-by-group!
  "get chart data by group
  This function recieved four params: a uid, a vector of exercises which is belong to a group
  startdate (js Date) and enddate(js date)"
  [uid exercises startdate enddate]
  (swap! store #(assoc % :chart/state "loading"))
  (swap! store #(assoc % :chart/data []))
  (go
    (try
      (doseq [it exercises]
        ;; TODO: use Promise.all
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
