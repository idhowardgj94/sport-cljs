(ns sports.components.record-exercise.index
  (:require
   [re-frame.core :as re-frame]
   [sports.events :as events]
   ["date-picker" :default DatePicker]
   ["react" :refer [useEffect]]
   [cljss.core :refer-macros [defstyles]]
   [reagent.core :as r]
   [reitit.frontend.easy :as rfe]
   [sports.state :as state]
   [sports.components.record-exercise.api
    :refer [add-exercise-record! delete-exercise-by-id! get-exercises-by-date]]
   [sports.components.record-exercise.util
    :refer [get-date-format
            get-exercises-by-group-id
            get-group-name-by-id
            get-today]]
   [sports.components.header.index :refer [head-layout head]]
   [sports.state]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.components.record-exercise.event :as event]))

;; TODO: exercise-meta used to store the input meta data.
;; may be correct the world to record-exercise-meta.
(defonce exercise-meta (r/atom {:groupId 0 :exerciseId 0}))
(defonce records (r/atom []))
;;@records
;;@exercise-meta
(defn switch-choose-date!
  [flag]
  "toggle the choose-date panel to show or not"
  (let [{:keys [show]} (state/subscribe :exercise/choose-date)]
    (swap! state/store assoc-in [:exercise/choose-date :show] flag)))

(defn set-date!
  "set date to store :exercise/choose-date"
  [date]
  (swap! state/store assoc :exercise/choose-date
         {:show false
          :date date}))

(defn record-head
  "define head of record exercise page"
  ([n]
   (let [{:keys [show date]} (:exercise/choose-date (state/subscribes :exercise/choose-date))]
     [head
      [:<>
       [:section.flex-1.bg-blue-100.flex.flex-row.items-center.pl-2
        [:button.appearance-none.shadow-none.border-none
         {:on-click #(-> js/window (.-history) (.back))}  [:i.fa-angle-left.fa-xl.fa-solid]]
        [:p.text-xl.mx-2.py-2 n]]

       [:section.bg-red-100.justify-center.items-center.px-4.inline-flex
        [:button.appearance-none.shadow-none.border-none
         {:on-click #(re-frame/dispatch [::events/sync-index-db-firebase-exercise])}
         [:i.my-auto.fa-solid.fa-rotate.fa-xl]]
        ]

       [:section.bg-red-100.justify-center.items-center.px-4.inline-flex
        [:button.appearance-none.shadow-none.border-none
         {:on-click #(switch-choose-date! true)}
         [:i.my-auto.fa-regular.fa-calendar.fa-xl]]
        [:span {:style {:display "block"}} [:> ^js DatePicker
                                            {:onCalendarClose #(switch-choose-date! false)
                                             :value date :isOpen show
                                             :onChange #(set-date! %)}]]]]]))
  ([]
   (record-head (str  "Today is " (get-today)))))

(re-frame/reg-sub
 ::get-exercise-groups
 (fn [db _]
   (:exercise/groups db)))

(defn click-item-handler!
  [id]
  (swap! exercise-meta #(assoc % :groupId id))
  (rfe/push-state :main-page {:page-name :choose-exercise} {:id id}))

(defn record-exercise-page
  "content for record exercise list"
  []
  (let [group @(re-frame/subscribe [::get-exercise-groups])]
    [:div.container
     [record-head]
     [:section.text-md.mx-2.my-4.py-2 "what do you wont to do today??"]
     [:div.mt-2
      (for [g group]
        ^{:key (:id g)}
        [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300
         [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
          {:on-click #(click-item-handler! (:id g))} (:name g)]])]]))

(defn click-record-handler!
  [id]
  (swap! exercise-meta #(assoc % :exerciseId id))
  (rfe/push-state :main-page {:page-name :record-form} {:exerciseId id}))

(defn choose-exercise-page
  "choose exercise"
  [match]
  (let [{:keys [id]} (:query-params match)]
    [:div.container
     [record-head (get-group-name-by-id id)]
     [:div.mt-2
      (for [exercise (get-exercises-by-group-id id)]
        ^{:key (:id exercise)}
        [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300
         [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
          {:on-click #(click-record-handler! (:id exercise))} (:name exercise)]])]]))

(defn get-form-by-name
  [e name]
  (-> e
      (.-target)
      (.-form)
      (.-elements)
      (aget name)
      (.-value)))

(defn get-form-by-id
  [id]
  (-> js/document
      (.getElementById id)
      (.-value)))

(def number-count (r/atom 1))
(defn submit-record-handler!
  "records: r/atom
  orders: r/atom"
  [e records]
  (.preventDefault e)

  (let [repeat (get-form-by-name e "repeat")
        weight (get-form-by-name e "weight")
        data (conj @exercise-meta {:order @number-count :weight weight :repeat repeat :date (js/Date. (get-form-by-id "date"))})]
    (-> (add-exercise-record! data)
        (.then #(swap! records (fn [store]
                                 (concat store (vector (assoc data :id (.-id %))))))))
    (swap! number-count inc)
    ))

(defn get-exercise-name-by-id
  "
  Input: exerciseId
  output exerciseName
  "
  [exercise-id]
  (->> (get-exercises-by-group-id (:groupId @exercise-meta))
       (filter #(= (:id %) exercise-id))
       (#(:name (nth % 0)))))

(defn delete-handler!
  "handle delete event when user click delete"
  [records it]
  (delete-exercise-by-id! (:id it))
  (reset! records (->> @records
                       (filter #(not= (:id %) (:id it))))))

(defn get-ordered-data
  "get erdered data, will order by order field
  if not exist, will ad a order field with orginal order"
  [data]
  (let [first (first data)]
    (case (:order first)
      nil     (->> (map-indexed list data)
                   (map (fn [[idx it]] (assoc it :order (+ idx 1)))))
      (->> data
           (sort-by :order)))))

(defn record-form-page
  "record exercise form"
  [match]
  (let [exercise-id (:exerciseId (:query-params match))
        name (get-exercise-name-by-id exercise-id)
        date (get-in @state/store [:exercise/choose-date :date])]

    (useEffect
     (fn []
       (go
         (try
           (let [data (<p! (get-exercises-by-date date exercise-id))]
             (->> (get-ordered-data data)
                  (reset! records))
             (let [orders (->> @records
                               (map #(:order %)))
                   count (or (apply max orders) 0)]
               (reset! number-count (+ 1 count))))
           (catch js/Error err (js/console.log err)))))
     (array date))

    [:div.container
     [record-head name]
     [:div.py-4.rounded.shadow-sm
      [:form.mb-4
       [:section.flex.flex-row.mb-2
        [:div.font-bold.text-lg.ml-2.flex-1 "Date"]
        [:div.ml-4.flex-1 (get-date-format date)]
        [:input {:type "hidden" :id "date" :name "date" :value (get-date-format date)}]]
       [:section.flex.flex-row
        [:label.font-bold.text-lg.ml-2.flex-1 {:for "weight"} "Weight"]
        [:div.flex-1
         [:input.mr-4.rounded-xl {:type "number" :placeholder "KG" :name "weight"}]]]
       [:section.flex.flex-row.mt-2
        [:label.font-bold.text-lg.ml-2.flex-1 {:for "repeat"} "Repeat"]
        [:div.flex-1
         [:input.mr-4.rounded-xl {:type "number" :placeholder "rep" :name "repeat"}]]]
       [:button.bg-green-500.hover:bg-green-700.rounded-xl.text-white.p-2.mx-auto.block.mt-4
        {:on-click #(submit-record-handler! % records)
         :type "submit"} "Submit"]]]
     [:section
      [:div.text-lg.text-center.font-medium.p-2.bg-blue-100 "Records"]
      [:div
       (for [it @records]
         (if (= it "invalid")
           ^{:key (str (:order it)(:exerciseId it))} [:div.flex.flex-row.p-2.border-sstale-300.border-0.border-b
                               [:div.flex-1 "Something went wrong with the data."]]
           ^{:key (str (:order it)(:exerciseId it))} [:div.flex.flex-row.p-2.border-sstale-300.border-0.border-b
                               [:div.flex-1 (str "Set " (:order it) )]
                               [:div.flex-1 (str (:weight it) "KG")]
                               [:div.flex-1  (str (:repeat it) "Rpt")]
                               [:button.bg-red-500.text-white.p-1.rounded-xl.px-2
                                {:on-click #(delete-handler! records it)} "Delete"]]))]]]))
