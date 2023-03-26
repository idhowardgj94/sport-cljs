(ns sports.components.chart-page.effect
  (:require
   [cljs.core.async :refer [go]]
   [cljs.spec.alpha :as s]
   [day8.re-frame.tracing :refer [fn-traced]]
   [re-frame.core :as re-frame]
   [spec-tools.data-spec :as ds]
   [sports.firebase.chart :refer [get-exercise-by-startdate-and-enddate]]
   [sports.events :as events]))

(defn assert-warning
  [spec val]
  (try
    (s/assert spec val)
    (catch js/Error e
      (do (js/console.warn e)
          (js/console.log (s/explain spec val))))))

;; spec defination ===========
(defn instance-of?
  "partially apply instance-of function"
  [pred]
  (partial instance? pred))

(def groups-payload
  {:chart/end-date (instance-of? js/Date)
   :chart/start-date (instance-of? js/Date)
   :uid string?
   :exercises (s/coll-of any?)})

(def groups-payload-spec
  (ds/spec
   {:name ::groups-payload
    :spec groups-payload}))

(defn reg-chart-page-effect
  "setup chart-page related effect."
  []
  (re-frame/reg-fx
   :get-chart-data-by-group
   (fn-traced
    [payload]
    (assert-warning groups-payload-spec payload)
    (let [uid (:uid payload)
          exercises (:exercises payload)
          startdate (:chart/start-date payload)
          enddate (:chart/end-date payload)]
      (re-frame/dispatch [::events/set-chart-state "loading"])
      (go
        (try
          (->
           (->> exercises
                (map #(-> (get-exercise-by-startdate-and-enddate uid (:id %) startdate enddate)
                          (.then (fn [data]
                                   (js/console.log uid (:id %) "startdate " startdate  "enddate " enddate)
                                   (js/console.log (clj->js data))
                                   (re-frame/dispatch [::events/set-chart-data
                                                       {:name (:name %)
                                                        :data data}])))))
                (js/Promise.all))
           (.then #(re-frame/dispatch [::events/set-chart-state "done"])))
          (catch js/Error e (js/console.log (ex-cause e)))))))))

#_((require '[cljs.repl :refer [doc]])
   (doc vector-of)
   (doc s/check-asserts)
   (doc s/coll-of)
   (doc map))
