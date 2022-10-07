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
   [sports.components.header.index :refer [head]]
   [cljss.core :refer-macros [defstyles]]
   [reitit.frontend.easy :as rfe]
   [sports.firebase.chart :as api]
   [reagent.core :as r]
   [cljs.spec.alpha :as s]
   [sports.state :refer [sub unsub store]]
   [reitit.frontend.easy :as rfe]))

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

(defn sample-chart
  []
  [:> ResponsiveContainer {:width "100%" :height "100%"}
   [:> LineChart {:width 500 :height 300 :data (clj->js data) :margin (clj->js {:top 5 :right 30 :left 20 :bottom 5})}
    [:> CartesianGrid {:stokeDasharray "3 3"}]
    [:> XAxis {:dataKey "name"}]
    [:> YAxis ]
    [:> Tooltip]
    [:> Legend]
    [:> Line {:type "monotone" :dataKey "pv" :stroke "#8884d8" :activeDot (clj->js {:r 8})}]
    [:> Line {:type "monotone" :dataKey "uv" :stroke "#82ca9d"}]
    ]])

(defn check-list
  []
  [:div.px-4.py-4
   [:label.block.text-sm.font-medium.text-gray-700  {:for "group"} "Group"]
   [:select#group.mt-1.block.w-full.rounded-md.border.border-gray-300.bg-white.py-2 {:name "group"}
    [:option "Leg"]
    [:option "Back"]
    [:option "Chest"]]])
(defn chart-page
  []
    (r/with-let [test (sub ::test [:chart/test])]
    [:div.container
     [head
      [:<>
       [:div.text-3xl.text-read.bg-blue-100.flex-1.flex.items-center
        [:div.pl-2 "Progessive Panel"]]]]
     [:div (str "test" @test)]
     [:button.bg-blue-100.p-2 {:on-click (fn []
                                           (js/console.log "inside click handler")
                                           (swap! store #(assoc % :chart/test (random-uuid)))
                                           )} "clickme" ]
     [:div.mt-4 {:style {:height "250px" :width "100%"} }
      [sample-chart]]]
      (finally
        (unsub ::test)
        (js/console.log "qqqq"))))
