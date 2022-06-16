(ns sports.components.record-exercise.index
  (:require
   ["date-fns" :as _]
   [reagent.core :as r]
   [cljss.core :refer-macros [defstyles]]
   [sports.state :refer [store]]))

(defstyles head-layout
  []
  {:height "100px" 
   :background-color "yellow"})
#_(do 
    (.format _ (js/Date.) "yyyy-MM-dd"))

(defn get-today
  []
  (.format _ (js/Date.) "yyyy-MM-dd"))

(defn head
  "define head of record exercise page"
  []
  [:header.flex.flex-col.justify-center {:class (head-layout)} 
   [:section.flex-1.bg-blue-100.flex.flex-row.items-center 
    [:p.text-6xl.p-4  "Today is " (get-today)]]])

(defn record-exercise-page
  "content for record exercise"
  []
  [head])