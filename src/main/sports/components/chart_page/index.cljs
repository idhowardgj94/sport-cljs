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
   [sports.actions :as actions :refer [get-chart-data-by-group!]]
   [cljs.spec.alpha :as s]
   [sports.state :refer [sub unsub store get-uid]]
   [reitit.frontend.easy :as rfe]
   [sports.firebase.exercise :as exercise]))

(def data [{:name "Page A"
           :uv 4000
           :pv 2400
           :amt 2400}
           {:name "Page B"
           :uv 3000
           :pv 1398
           :amt 2210}
           {:name "Page C"
           :uv 2000
           :pv 9800
           :amt 2990}
           {:name "Page D"
           :uv 2780
           :pv 3980
           :amt 2000}
           {:name "Page E"
           :uv 1890
           :pv 4800
           :amt 2181}
           {:name "Page F"
           :uv 2390
           :pv 3800
           :amt 2500}
           {:name "Page G"
           :uv 3490
           :pv 4380
           :amt 2100}])

(defn chart
  [data]
  (print data)
   [:> ResponsiveContainer {:width "100%" :height "100%"}
    [:> LineChart {:width 500 :height 300 :data (clj->js data) :margin (clj->js {:top 5 :right 30 :left 20 :bottom 5})}
     [:> CartesianGrid {:stokeDasharray "3 3"}]
     [:> XAxis {:dataKey "date"}]
     [:> YAxis]
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

(defn get-month-duration
  [date]
  (let [start (js/Date. date)]
    (.setDate start (- (.getDate start) 31))
    start))

;;@store
;(js/console.log (:user @store))
;(print (.-uid (:user @store)))
(defn on-change-select-handler
  [e ]
  (let [group-id (.-value (.-target e))
        exercises (get-exercises-by-group-id group-id)
        enddate (js/Date.)
        startdate (get-month-duration enddate)]
    (js/console.log (clj->js exercises))
    (get-chart-data-by-group!
     (get-uid) exercises startdate enddate)))

(defn chart-page
  []
  ;; get the default chart data
  ;; I assme that the default group is the first item of the groups array.
  ;; TODO: choose duration
  (let [enddate (js/Date.)
        startdate (get-month-duration enddate)]
    (if-not (= "done" (:chart/state @store))
      (get-chart-data-by-group!
       (get-uid) (:exercises (nth (:exercise/groups @store) 0)) startdate enddate)))

  (fn []
    (r/with-let [exercise (sub :groups [:exercise/groups
                                        :chart/state
                                        :chart/err-msg
                                        :chart/data])]
    [:div.container
     [head
      [:<>
       [:div.text-3xl.text-read.bg-blue-100.flex-1.flex.items-center
        [:div.pl-2 "Progessive Panel"]]]]
     [:div.mt-4
      [:select.mg-gray-50.border.border-gray-300.text-gray-900.text-sm.rounded-lg
       {:on-change #(on-change-select-handler %)}
       (for [item (:exercise/groups @exercise)]
        ^{:key (:id item)} [:option {:value (:id item)} (:name item)])
       ]]
     ;; chart part
     (if-not (= (:chart/state @exercise) "done")
             [:div.mt-4 "loading data, please wait......"]
             (for [it (:chart/data @exercise)]
             ^{:key (:name it)} [:div.mt-4.text-xl.text-bold (:name it)
                                 [:div.mt-2 {:style {:height "250px" :width "100%"} }
                                  [chart (:data it)]]]))]
    (finally (unsub ::groups)))))
