(ns sports.models.chart
  (:require [cljs.spec.alpha :as s]
            [sports.util :as util]
            [spec-tools.core :as st]
            [spec-tools.data-spec :as ds]))


(def by-date-record
  {:date string?
   :weight int?
   :repeat int?
   })

(def by-date-record-spec
  (ds/spec
   {:name ::by-date-record
    :spec by-date-record}))

(defrecord ByDateRecord [date weight repeat])

(defn newByDateRecord
  "generate ByDateRecord from map"
  [m]
  (s/assert by-date-record-spec (map->ByDateRecord m)))

(defn convert-to-date
  "timestamp: firebase timestamp type"
  [timestamp]
  (js/Date. (* 1000 timestamp)))

(defn data-group-by-date
  "this data need to transform to clj data first
  by (js->clj <data> :keywordize-keys true)"
  [data]
  (group-by #(util/get-date-format (convert-to-date (.-seconds (:date %)))) data))

;; Done average
(defn- get-average-by-key
  "get the average value by key
  assume that type can trasform to integer"
  [lt key]
  (let [size (count lt)]
    (->> lt
         (map #(int (key %)))
         (reduce +)
         (#(/ % size))
     )))

(defn get-chart-data
  [group-data]
  (for [[key val]  group-data]
    (let [weight-avg (get-average-by-key val :weight)
          repeat-avg (get-average-by-key val :repeat)]
      (newByDateRecord
       {:date key
        :weight weight-avg
        :repeat repeat-avg}))))

;; need to *1000 to covert seconds -> milliseconds.
;; Done
