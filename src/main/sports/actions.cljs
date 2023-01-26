(ns sports.actions
  (:require
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.firebase.chart :refer [get-exercise-by-startdate-and-enddate]]
   [sports.state :refer [store]]
   ["date-fns" :refer [endOfToday addMonths startOfYear endOfYear startOfToday endOfToday]]))

;; chart_page actions
(defn get-monthly-duration!
  "Aim to get monthly duration, start from today"
  []
  (let [start (endOfToday)]
    (.setDate start (- (.getDate start) 31))
    (swap! store assoc
           :chart/end-date (endOfToday)
           :chart/start-date start)))

(defn get-season-duration!
  "get season duration. a season is three month"
  []
  (let [end (endOfToday)
        start (addMonths end -3)]
    (swap! store assoc
           :chart/end-date end
           :chart/start-date start)))

(defn get-year-duration!
  "get year duration."
  []
  (let [today ()
        end (endOfYear (endOfToday))
        start (startOfYear (startOfToday))]
    (swap! store assoc
           :chart/end-date end
           :chart/start-date start)))

(defn set-exercise-loading!
  [val]
  (swap! store assoc :exercise/loading val))

(defn set-exercise-group!
  [groups]
  (swap! store #(assoc % :exercise/groups groups)))

(defn update-exercise-group!
  [f & vals]
  (swap! store update :exercise/groups #(apply f % vals)))

(defn get-chart-data-by-group!
  "get chart data by group
  This function recieved four params: a uid, a vector of exercises which is belong to a group
  startdate (js Date) and enddate(js date)"
  [uid exercises startdate enddate]
  (swap! store #(assoc % :chart/state "loading"))
  (swap! store #(assoc % :chart/data []))
  (go
    (try
      (-> (->> exercises
               ;; TODO: how this id -> gid not found?
                (map #(-> (get-exercise-by-startdate-and-enddate uid (:id %) startdate enddate)
                          (.then (fn [data]
                                   (if-not (= (.-length (clj->js data)) 0)
                                     (swap! store (fn [state] (update state :chart/data
                                                                      (fn [it] (conj it {:data data :name (:name %)}))))))))))
                (js/Promise.all))
          (.then #(swap! store assoc :chart/state "done")))
      (catch js/Error e (js/console.log (ex-cause e))))))

;;(get-chart-data-by-group!
;; "BC7Eplqe9NftRiirrjakIvHMvRx2" test-data (js/Date. "2022-08-01") (js/Date. "2022-09-01"))
