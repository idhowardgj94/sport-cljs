(ns sports.components.chart-page.index
  (:require
   ["recharts" :refer [LineChart
                       Line
                       XAxis
                       YAxis
                       CartesianGrid
                       Tooltip
                       Legend
                       ResponsiveContainer]]
   [sports.components.record-exercise.util
    :refer [get-exercises-by-group-id]]
   [sports.components.header.index :refer [head]]
   [cljss.core :refer-macros [defstyles]]
   [reitit.frontend.easy :as rfe]
   [sports.firebase.chart :as api]
   [reagent.core :as r]
   [sports.actions :as actions :refer [get-chart-data-by-group!
                                       get-monthly-duration]]
   [cljs.spec.alpha :as s]
   [sports.state :refer [sub unsub store get-uid]]
   [reitit.frontend.easy :as rfe]
   [sports.firebase.exercise :as exercise]
   ["date-fns" :refer [endOfToday]]))

(defn chart
  [data]
  (print data)
   [:> ResponsiveContainer {:width "100%" :height "100%"}
    [:> LineChart {:width 500 :height 300 :data (clj->js data) :margin (clj->js {:top 5 :right 30 :left 20 :bottom 5})}
     [:> CartesianGrid {:stokeDasharray "3 3"}]
     [:> XAxis {:dataKey "date"}]
     [:> YAxis {:domain ["auto" "auto"]} ]
     [:> Tooltip]
     [:> Legend]
     ;; [:> Line {:type "monotone" :dataKey "pv" :stroke "#8884d8" :activeDot (clj->js {:r 8})}]
     [:> Line {:type "monotone" :dataKey "weight" :stroke "#82ca9d"}]]])

(defn check-list
  []
  [:div.px-4.py-4
   [:label.block.text-sm.font-medium.text-gray-700  {:for "group"} "Group"]
   [:select#group.mt-1.block.w-full.rounded-md.border.border-gray-300.bg-white.py-2 {:name "group"}
    [:option "Leg"]
    [:option "Back"]
    [:option "Chest"]]])

;;@store
;(js/console.log (:user @store))
;(print (.-uid (:user @store)))
(defn on-change-select-handler
  [e startdate enddate]
  (let [group-id (.-value (.-target e))
        exercises (get-exercises-by-group-id group-id)]
    (get-chart-data-by-group!
     (get-uid) exercises startdate enddate)))

(defn chart-page
  []
  ;; get the default chart data
  ;; I assme that the default group is the first item of the groups array.
  ;; TODO: choose duration
  (when (or (= nil (:chart/end-date @store) ) (= nil (:chart/start-date @store)))
    (get-monthly-duration))

  (fn []
    (r/with-let [exercise (sub :groups [:exercise/groups
                                        :chart/start-date
                                        :chart/end-date
                                        :chart/state
                                        :chart/err-msg
                                        :chart/data])]
      (when (= "init" (:chart/state @store))
        (get-chart-data-by-group!
         (get-uid) (:exercises (nth (:exercise/groups @store) 0)) (:chart/start-date @exercise) (:chart/end-date @exercise)))
      [:div.container
       [head
      [:<>
       [:div.text-3xl.text-read.bg-blue-100.flex-1.flex.items-center
        [:div.pl-2 "Progessive Panel"]]]]
     ;; form
     [:div.mt-4.mx-2.flex
      [:section.bg-blue-100 {:class "w-1/2 mx-2"}
       [:select.mg-gray-50.border.border-gray-300.text-gray-900.text-sm.rounded-lg.w-full
        {:on-change #(on-change-select-handler % (:chart/start-date @exercise) (:chart/end-date @exercise))}
       (for [item (:exercise/groups @exercise)]
        ^{:key (:id item)} [:option {:value (:id item)} (:name item)])
       ]]
      [:section.bg-blue-100 {:class "w-1/2"}
       [:select.mg-gray-50.border.border-gray-300.text-gray-900.text-sm.rounded-lg.w-full
        [:option {:value "month"}  "month"]
        [:option {:value "season"} "season"]
        [:option {:value "year"} "year"]
        ]]]
           ;; chart part
     (if-not (= (:chart/state @exercise) "done")
             [:div.px-2.mt-4 "loading data, please wait......"]
             (for [it (:chart/data @exercise)]
             ^{:key (:name it)} [:div.mx-2.mt-4.text-xl.text-bold (:name it)
                                 [:div.mt-2.mx-2 {:style {:height "250px" :width "100%"} }
                                  [chart (:data it)]]]))]
    (finally (unsub ::groups)))))
