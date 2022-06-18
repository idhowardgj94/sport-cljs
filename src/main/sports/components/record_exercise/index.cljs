(ns sports.components.record-exercise.index
  (:require
   ["date-fns" :as _] 
   [reitit.frontend.easy :as rfe]
   [cljss.core :refer-macros [defstyles]]
   [sports.models.exercise :refer [group]]))

(defstyles head-layout
  []
  {:height "50px" 
   :background-color "yellow"})

(defn get-today
  []
  (.format _ (js/Date.) "yyyy-MM-dd"))

(defn head
  "define head of record exercise page"
([n]
  [:header.flex.flex-col.justify-center {:class (head-layout)} 
   [:section.flex-1.bg-blue-100.flex.flex-row.items-center.pl-2
    [:button.appearance-none.shadow-none.border-none {:on-click #(-> js/window (.-history) (.back))}  [:i.fa-angle-left.fa-xl.fa-solid]] 
    [:p.text-xl.mx-2.py-2 n]]])  
 ([]
  (head (str  "Today is " (get-today)))))

(defn click-item-handler
  [name]
  (rfe/push-state :main-page {:page-name "record-form"} {:name name}))

(defn record-exercise-page
  "content for record exercise list"
  []
  [:div.container
   [head]
   [:section.text-md.mx-2.my-4.py-2 "what do you wont to do today??"]
   [:div.mt-2
    (for [g group]
      ^{:key (:id g)} [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300 [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
                                                                                      {:on-click #(click-item-handler (:name g))} (:name g)]])]])

(defn record-form-page
  "record exercise form"
  [match]
  (let [name (:name (:query-params match))]
    (js/console.log (clj->js name))
    [:div.container
     [head name]
     [:div.mt-2 "hello, world"]]))