(ns sports.components.record-exercise.index
  (:require
   ["date-fns" :as _]
   ["date-picker" :default DatePicker ]
   [reagent.core :as r]
   [reitit.frontend.easy :as rfe]
   [cljss.core :refer-macros [defstyles]]
   [sports.models.exercise :refer [group]]
   [sports.components.record-exercise.api :refer [add-exercise-record! get-exercises-by-date delete-exercise-by-id!]]))

(defonce exercise-meta (r/atom {:group "" :exercise ""}))
(defonce choose-date (r/atom {:show false :date (js/Date.)}))
(defonce records (r/atom []))

(defstyles head-layout
  []
  {:height "50px"
   :background-color "yellow"})

(defn get-today
  []
  (.format _ (js/Date.) "yyyy-MM-dd"))

(defn get-date-format
  [d]
  (.format _ d "yyy-MM-dd"))

(defn head
  "define head of record exercise page"
  ([n]
   [:header.flex.flex-row.justify-center {:class (head-layout)}
    [:section.flex-1.bg-blue-100.flex.flex-row.items-center.pl-2
     [:button.appearance-none.shadow-none.border-none {:on-click #(-> js/window (.-history) (.back))}  [:i.fa-angle-left.fa-xl.fa-solid]]
     [:p.text-xl.mx-2.py-2 n]]
    [:section.bg-red-100.justify-center.items-center.px-4.inline-flex
     [:button.appearance-none.shadow-none.border-none {:on-click #(swap! choose-date (fn [lt] (assoc lt :show (not (@choose-date :show)))))}
      [:i.my-auto.fa-regular.fa-calendar.fa-xl]]
     [:span {:style {:display "block"}} [:> ^js DatePicker
                                         {:onCalendarClose #(swap! choose-date (fn [lt] (assoc lt :show false)))
                                          :value (:date @choose-date) :isOpen (:show @choose-date)
                                          :onChange #(swap! choose-date (fn [lt] (assoc lt :date %)))}]]]])
  ([]
   (head (str  "Today is " (get-today)))))

(defn click-item-handler!
  [name]
  (swap! exercise-meta #(assoc % :group name))
  (rfe/push-state :main-page {:page-name "choose-exercise"} {:name name}))

(defn record-exercise-page
  "content for record exercise list"
  []
  [:div.container
   [head]
   [:section.text-md.mx-2.my-4.py-2 "what do you wont to do today??"]
   [:div.mt-2
    (for [g group]
      ^{:key (:id g)}
      [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300
       [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
        {:on-click #(click-item-handler! (:name g))} (:name g)]])]])

(defn- get-exercises
  [name]
  (->> group
       (filter #(= (:name %) name))
       (#(:exercises (nth % 0)))))

(defn click-record-handler!
  [name]
  (swap! exercise-meta #(assoc % :exercise name))
  (rfe/push-state :main-page {:page-name "record-form"} {:name name}))

(defn choose-exercise-page
  "choose exercise"
  [match]
  (let [{:keys [name]} (:query-params match)]
    [:div.container
     [head name]
     [:div.mt-2
      (for [exercise (get-exercises name)]
        ^{:key (:id exercise)}
        [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300
         [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
          {:on-click #(click-record-handler! (:name exercise))} (:name exercise)]])]]))

(defn- get-form-by-name
  [e name]
  (-> e
      (.-target)
      (.-form)
      (.-elements)
      (aget name)
      (.-value)))

(defn- get-form-by-id
  [id]
  (-> js/document
      (.getElementById id)
      (.-value)))

(defn submit-record-handler
  "records: r/atom"
  [e records]
  (.preventDefault e)

  (let [repeat (get-form-by-name e "repeat")
        data (conj @exercise-meta {:repeat repeat :id (str (random-uuid)) :date (get-form-by-id "date")})]
    (add-exercise-record! data)
    (swap! records #(concat % (vector data)))))

(defn delete-handler!
  [records it]
  (delete-exercise-by-id! (:id it))
  (reset! records (->> @records
                       (filter #(not= (:id %) (:id it))))))

(defn record-form-page
  "record exercise form"
  [match]
  (let [name (:name (:query-params match))
        get-date #(:date @choose-date)
        get-record-handler (fn [date] (-> (get-exercises-by-date date name)
                                      (.then #(do (reset! records (js->clj % :keywordize-keys true))))))]
;; (:date (nth args 3)) 
    (r/create-class
     {:component-did-mount (fn []
                             (add-watch choose-date :choose-by-date
                                        (fn [& args]
                                          (when (= (:date (nth args 3)) (:date (nth args 2)))
                                            (get-record-handler (get-date-format (:date (nth args 3)))))))
                             (get-record-handler (get-date-format (:date @choose-date))))

      :component-will-unmount (fn [] (remove-watch choose-date :choose-by-date))
      :reagent-render (fn []
                        [:div.container
                         [head name]
                         [:div.py-4.rounded.shadow-sm
                          [:form.mb-4
                           [:section.flex.flex-row.mb-2
                            [:div.font-bold.text-lg.ml-2.flex-1 "Date"]
                            [:div.ml-4.flex-1 (get-date-format (get-date))]
                            [:input {:type "hidden" :id "date" :name "date" :value (get-date-format (get-date))}]]
                           [:section.flex.flex-row
                            [:label.font-bold.text-lg.ml-2.flex-1 {:for "repeat"} "Repeat"]
                            [:div.flex-1
                             [:input.mr-4.rounded-xl {:type "number" :placeholder "KG" :name "repeat"}]]]
                           [:button.bg-green-500.hover:bg-green-700.rounded-xl.text-white.p-2.mx-auto.block.mt-4
                            {:on-click #(submit-record-handler % records)
                             :type "submit"} "Submit"]]]
                         [:section
                          [:div.text-lg.text-center.font-medium.p-2.bg-blue-100 "Records"]
                          [:div
                           (for [it (map-indexed vector @records)]
                             ^{:key (first it)} [:div.flex.flex-row.p-2.border-sstale-300.border-0.border-b
                                                 [:div.flex-1 (str "Set " (+ 1 (first it)))]
                                                 [:div.flex-1  (str (:repeat (last it)) "KG")]
                                                 [:button.bg-red-500.text-white.p-1.rounded-xl.px-2
                                                  {:on-click #(delete-handler! records (last it))} "Delete"]])]]])})))