(ns sports.components.record-exercise.index
  (:require
   ["date-fns" :as _]
   ["date-picker" :default DatePicker ]
   [reagent.core :as r]
   [reitit.frontend.easy :as rfe]
   [cljss.core :refer-macros [defstyles]]
   [sports.models.exercise :refer [group]]
   [sports.components.record-exercise.api :refer [add-exercise-record! get-exercises-by-date delete-exercise-by-id!]]))

(defonce exercise-meta (r/atom {:groupId 0 :exerciseId 0}))
(defonce choose-date (r/atom {:show false :date (js/Date.)}))
(defonce records (r/atom []))

(defstyles head-layout
  []
  {:height "50px"
   :background-color "yellow"})

(defn get-today
  "This function get today date in yyy-MM-dd format"
  []
  (.format _ (js/Date.) "yyyy-MM-dd"))

(defn get-date-format
  "Input: js/Date, output yyyy-mm-dd"
  [d]
  (.format _ d "yyy-MM-dd"))

(defn get-group-by-id
  [id]
  (->> group
      (filter #(= (:id %) id))
      (first)))

(defn is-nan
  [text]
  (js/isNaN (js/parseInt text)))

;; FIXME: This is not a good design
;; This transform the head need te be show.
;; The input n may be eithor "Today is xxx" or <string of int>
;; which indicate the id of group
;; So need to be show string directly
;; or show group name by id
(defn get-group-name-by-id
  "
  Input: string or int of string
  output: date string (directly output) or group name (use get-group-by-id)
  "
  [n]
  (-> (get-group-by-id (js/parseInt n))
      (:name)))

;; FIXME: get-exercises -> get-exercises-by-group-id
(defn get-exercises
  [id]
  (->> group
       (filter #(= (:id %) (js/parseInt id)))
       (#(:exercises (nth % 0)))))


(defn get-exercise-name-by-id
  "
  Input: exerciseId
  output exerciseName
  "
  [exercise-id]
  (->> (get-exercises (:groupId @exercise-meta))
      (filter #(= (:id %) exercise-id))
      (#(:name (nth % 0))) ))

(defn head
  "define head of record exercise page"
  ([n]
     [:header.flex.flex-row.justify-center {:class (head-layout)}
      [:section.flex-1.bg-blue-100.flex.flex-row.items-center.pl-2
       [:button.appearance-none.shadow-none.border-none
        {:on-click #(-> js/window (.-history) (.back))}  [:i.fa-angle-left.fa-xl.fa-solid]]
       [:p.text-xl.mx-2.py-2 n]]
      [:section.bg-red-100.justify-center.items-center.px-4.inline-flex
       [:button.appearance-none.shadow-none.border-none
        {:on-click #(swap! choose-date (fn [lt] (assoc lt :show (not (@choose-date :show)))))}
        [:i.my-auto.fa-regular.fa-calendar.fa-xl]]
       [:span {:style {:display "block"}} [:> ^js DatePicker
                                           {:onCalendarClose #(swap! choose-date (fn [lt] (assoc lt :show false)))
                                            :value (:date @choose-date) :isOpen (:show @choose-date)
                                            :onChange #(swap! choose-date (fn [lt] (assoc lt :date %)))}]]]])
  ([]
   (head (str  "Today is " (get-today)))))

(defn click-item-handler!
  [id]
  (swap! exercise-meta #(assoc % :groupId id))
  (rfe/push-state :main-page {:page-name "choose-exercise"} {:id id}))

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
        {:on-click #(click-item-handler! (:id g))} (:name g)]])]])

(defn click-record-handler!
  [id]
  (swap! exercise-meta #(assoc % :exerciseId id))
  (rfe/push-state :main-page {:page-name "record-form"} {:exerciseId id}))

(defn choose-exercise-page
  "choose exercise"
  [match]
  (let [{:keys [id]} (:query-params match)]
    [:div.container
     [head (get-group-name-by-id id)]
     [:div.mt-2
      (for [exercise (get-exercises id)]
        ^{:key (:id exercise)}
        [:div.flex.px-2.border-0.border-b.border-solid.border-slate-300
         [:button.font-medium.text-xl.border-0.flex-1.appearance-none.text-left.py-2
          {:on-click #(click-record-handler! (:id exercise))} (:name exercise)]])]]))

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
        weight (get-form-by-name e "weight")
         data (conj @exercise-meta {:weight weight :repeat repeat :date (get-form-by-id "date")})]
    (-> (add-exercise-record! data)
        (.then #(swap! records (fn [store] (concat store (vector (assoc data :id (.-id %)))))
                       )))))

(defn delete-handler!
  "handle delete event when user click delete"
  [records it]
  (delete-exercise-by-id! (:id it))
  (reset! records (->> @records
                       (filter #(not= (:id %) (:id it))))))

(defn record-form-page
  "record exercise form"
  [match]
  (let [exercise-id (:exerciseId (:query-params match))
        name (get-exercise-name-by-id exercise-id)
        get-date #(:date @choose-date)
        get-record-handler (fn [date]
                             ;; Note: get-exercise-by-date will return a js array
                             ;; which will transform to clojure's map, and it's indices will trasform to keyword
                             ;; by setting :keywordize-keys to true.
                             ;; so that we can use vector to trasform it to clojure's vector
                             (-> (get-exercises-by-date date exercise-id)
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
                            [:label.font-bold.text-lg.ml-2.flex-1 {:for "weight"} "Weight"]
                            [:div.flex-1
                             [:input.mr-4.rounded-xl {:type "number" :placeholder "KG" :name "weight"}]]]
                           [:section.flex.flex-row.mt-2
                            [:label.font-bold.text-lg.ml-2.flex-1 {:for "repeat"} "Repeat"]
                            [:div.flex-1
                             [:input.mr-4.rounded-xl {:type "number" :placeholder "rep" :name "repeat"}]]]
                           [:button.bg-green-500.hover:bg-green-700.rounded-xl.text-white.p-2.mx-auto.block.mt-4
                            {:on-click #(submit-record-handler % records)
                             :type "submit"} "Submit"]]]
                         [:section
                          [:div.text-lg.text-center.font-medium.p-2.bg-blue-100 "Records"]
                          [:div
                           (for [it (map-indexed vector @records)]
                             ^{:key (first it)} [:div.flex.flex-row.p-2.border-sstale-300.border-0.border-b
                                                 [:div.flex-1 (str "Set " (+ 1 (first it)))]
                                                 [:div.flex-1 (str (:weight (last it)) "KG")]
                                                 [:div.flex-1  (str (:repeat (last it)) "Rpt")]
                                                 [:button.bg-red-500.text-white.p-1.rounded-xl.px-2
                                                  {:on-click #(delete-handler! records (last it))} "Delete"]])]]])})))
