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
   [re-frame.core :as re-frame]
   [sports.components.header.index :refer [head]]
   [sports.actions :as actions :refer [get-chart-data-by-group!]]
   [sports.state :refer [store]]
   ["react" :refer [useEffect]]
   [sports.events :as events]))

(defn chart
  [data]
  [:> ResponsiveContainer {:width "100%" :height "100%"}
   [:> LineChart {:width 500 :height 300 :data (clj->js data) :margin (clj->js {:top 5 :right 30 :left 20 :bottom 5})}
    [:> CartesianGrid {:stokeDasharray "3 3"}]
    [:> XAxis {:dataKey "date"}]
    [:> YAxis {:domain ["auto" "auto"]}]
    [:> Tooltip]
    [:> Legend]
     ;; [:> Line {:type "monotone" :dataKey "pv" :stroke "#8884d8" :activeDot (clj->js {:r 8})}]
    [:> Line {:type "monotone" :dataKey "weight" :stroke "#82ca9d"}]]])

(defn get-exercises-by-group-id
  [groups id]
  (->> groups
       (filter #(= (:id %) (js/parseInt id)))
       (#(:exercises (nth % 0)))))

(defn on-change-select-handler
  [e payload]
  (let [group-id (.-value (.-target e))
        groups (:exercise/groups payload)
        exercises (get-exercises-by-group-id groups group-id)
        startdate (:chart/start-date payload)
        enddate (:chart/end-date payload)
        uid (:uid payload)]
    (re-frame/dispatch [::events/get-chart-data-by-group
                        {:chart/start-date startdate
                         :chart/end-date  enddate
                         :uid uid
                         :exercises exercises}])
    (get-chart-data-by-group!
     uid exercises startdate enddate)))

(defn on-change-duration-handler
  "change duration handler. will change the store duration by type
  e: event
  type: year, season, month"
  [e]
  (let [val (.-value (.-target e))]
    (case val
      "year" (re-frame/dispatch [::events/change-duration :year])
      "month" (re-frame/dispatch [::events/change-duration :month])
      "season" (re-frame/dispatch [::events/change-duration :season]))))

(re-frame/reg-sub
 ::exercise
 (fn [db _]
   (select-keys db [:exercise/groups
                    :chart/start-date
                    :chart/end-date
                    :chart/state
                    :chart/err-msg
                    :chart/data])))

(re-frame/reg-sub
 ::get-uid
 (fn [db _]
   (.-uid (:user db))))

(defn chart-page
  []
  ;; get the default chart data
  ;; I assme that the default group is the first item of the groups array.
  (fn []
    (let [exercise @(re-frame/subscribe [::exercise])
          uid @(re-frame/subscribe [::get-uid])]
      (useEffect (fn []
                   (js/console.log "inside effect")
                   (swap! store assoc :chart/state "reload")
                   (re-frame/dispatch [::events/get-chart-data-by-group
                                       {:chart/start-date (:chart/start-date exercise)
                                        :chart/end-date (:chart/end-date exercise)
                                        :uid uid
                                        :exercises (:exercises (nth (:exercise/groups exercise) 0))}])) (array (:chart/start-date exercise) (:chart/end-date exercise)))

      [:div.container
       [head
        [:<>
         [:div.text-3xl.text-read.bg-blue-100.flex-1.flex.items-center
          [:div.pl-2 "Progessive Panel"]]]]
     ;; form
       [:div.mt-4.mx-2.flex
        [:section.bg-blue-100 {:class "w-1/2 mx-2"}
         [:select.mg-gray-50.border.border-gray-300.text-gray-900.text-sm.rounded-lg.w-full
          {:on-change #(on-change-select-handler % (assoc exercise :uid uid))}
          (for [item (:exercise/groups exercise)]
            ^{:key (:id item)} [:option {:value (:id item)} (:name item)])]]
        [:section.bg-blue-100 {:class "w-1/2"}
         [:select.mg-gray-50.border.border-gray-300.text-gray-900.text-sm.rounded-lg.w-full
          {:on-change #(on-change-duration-handler %)}
          [:option {:value "month"}  "Month"]
          [:option {:value "season"} "Season"]
          [:option {:value "year"} "Year"]]]]
           ;; chart part
       (if-not (= (:chart/state exercise) "done")
         [:div.px-2.mt-4 "loading data, please wait......"]
         (for [it (:chart/data exercise)]
           ^{:key (:name it)} [:div.mx-2.mt-4.text-xl.text-bold (:name it)
                               [:div.mt-2.mx-2 {:style {:height "250px" :width "100%"}}
                                [chart (:data it)]]]))])))
