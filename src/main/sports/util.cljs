(ns sports.util
  (:require
   [goog.object :as o]
   ["date-fns" :as _]
   ))

(defn json->edn
 [data]
 (js->clj data :keywordize-keys true))


(defn organize-js-data
  [data]
  (as-> (.-docs data) $
    (.map $ #(let [data (.data %)]
               (o/set data "id" (.-id %))
               data))
    ))

(defn get-date-format
  "Input: js/Date, output yyyy-mm-dd"
  [d]
  (.format _ d "yyy-MM-dd"))
