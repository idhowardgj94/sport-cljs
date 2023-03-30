(ns sports.events
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [sports.firebase.setup :refer [init-app]]
            [cljs.spec.alpha :as s]
            [spec-tools.data-spec :as ds]
            ["date-fns" :refer [endOfToday addMonths startOfYear endOfYear startOfToday endOfToday]]))

(re-frame/reg-event-fx
 :setup-firebase
 (fn-traced [{:keys [db]} [_ {:keys [config ENV]}]]
            {:db (assoc db :app (init-app config ENV))
             :setup-auth-listener nil}))

(re-frame/reg-event-db
 ::initialise-db
 (fn-traced [_ _]
            {:auth? "loading"
    ;; this is route store.
             :match nil
             :validate-msg nil
             :app nil
             :user nil
             :index-db/db nil
             :record/data []
             :record/status "loading"
             :exercise/loading "loading"
             :exercise/groups []
             :exercise/choose-date {:show false :date (js/Date.)}
             :chart/start-date (let [$ (endOfToday)]
                                 (.setDate $ (- (.getDate $) 31))
                                 $)
             :chart/end-date (endOfToday)
             :chart/state "init"
             :chart/err-msg nil
             :chart/data []}))

(re-frame/reg-event-fx
 ::initialise-app
 (fn-traced [{:keys [db]} [_ config ENV]]
            {:dispatch [:setup-firebase {:config config :ENV ENV}]
             :setup-route nil
             :setup-index-db nil}))

(re-frame/reg-event-db
 ::clear-login-validate-msg
 (fn-traced [db _]
            (assoc db :validate-msg nil)))

(re-frame/reg-event-db
 ::login-validate-msg
 (fn-traced [db [_ msg]]
            (assoc db :validate-msg msg)))

;; --------- indexdb related Event -------------
(re-frame/reg-event-db
 ::set-index-db
 (fn-traced [db [_ payload]]
            (assoc db :index-db/db payload)))

(re-frame/reg-event-fx
 ::get-exercise-from-indexdb
 (fn-traced
  [{:keys [db]} _]
  (when-let [index-db (get db :index-db/db)]
    {:get-from-index-db index-db})))

(re-frame/reg-event-db
 ::set-exercise-loading
 (fn-traced [db [_ payload]]
            (assoc db :exercise/loading payload)))

(re-frame/reg-event-fx
 ::set-exercise-groups
 (fn-traced [{:keys [db]} [_ payload]]
            {:db (assoc db :exercise/groups payload)
             :dispatch [::set-exercise-loading "success"]}))

(re-frame/reg-event-fx
 ::sync-index-db-firebase-exercise
 (fn-traced [{:keys [db]} _]
            {:sync-index-db-from-firebase (:index-db/db db)}))

;; -------- Auth related event -------
;; TODO: to spec
(def auth-change-payload
  {:user (ds/maybe some?)
   :auth? boolean?})

(def auth-change-payload-spec
  (ds/spec
   {:name ::auth-change-payload
    :spec auth-change-payload}))

(re-frame/reg-event-db
 ::auth-change
 (fn-traced [db [_ payload]]
            (s/explain auth-change-payload-spec payload)
            (conj db payload)))

;; --------- Login Event -------------
;; TODO: to spec
(def login-payload
  {:account string?
   :password string?
   :remember? boolean?})

(def login-payload-spec
  (ds/spec
   {:name ::login-payload
    :spec login-payload}))

(re-frame/reg-event-fx
 ::login
 (fn-traced [{:keys [db]} [_ payload]]
            ;; login data spec
            (s/explain login-payload-spec payload)
            {:login payload}))

;; --------- Record Event -------------
(re-frame/reg-event-fx
 ::add-exercise-record
 (fn-traced [{:keys [db]} [_ data]]
            (let [uid (-> (:user db)
                          (.-uid))]
              {:add-exercise-record-effect (assoc data :uid uid)})))

(re-frame/reg-event-db
 ::add-exercise-record-data
 (fn-traced [db [_ data]]
            (update db :record/data #(conj % data))))

(re-frame/reg-event-fx
 ::delete-exercise-record
 (fn-traced [_ [_ data]]
            {:delete-exercise-record-effect data
             :dispatch [::delete-exercise-record-data data]}))

(re-frame/reg-event-db
 ::delete-exercise-record-data
 (fn-traced [db [_ it]]
            (update db :record/data (fn [data]
                                      (->> data
                                           (filter #(not= (:id %) (:id it))))))))

(re-frame/reg-event-fx
 ::get-exercise-by-date
 (fn-traced [{:keys [db]} [_ payload]]
            (let [{:keys [user]} db]
              {:get-exercise-effect (assoc payload
                                           :uid (.-uid user))})))

(re-frame/reg-event-db
 ::set-exercise-data
 (fn-traced [db [_ {:keys [data status]}]]
            (assoc db
                   :record/data data
                   :record/status status)))
;; --------- chart event ---------------
(re-frame/reg-event-fx
 ::get-chart-data-by-group
 (fn-traced [_ payload]
            {:get-chart-data-by-group (get payload 1)}))

(def chart-data-payload
  {:name string?
   :data any?})

(def chart-data-payload-spec
  (ds/spec
   {:name ::chart-data-payload
    :spec chart-data-payload}))

(re-frame/reg-event-db
 ::set-chart-data
 (fn-traced [db [_ payload]]
            (s/assert chart-data-payload-spec payload)
            (s/explain chart-data-payload-spec payload)
            (let [data (:data payload)
                  name (:name payload)]
              (when-not (= (count data) 0)
                (-> (update db :chart/data
                            (fn [it] (conj it {:data data :name name}))))))))

(re-frame/reg-event-db
 ::set-chart-state
 (fn-traced [db [_ payload]]
            (assoc db
                   :chart/state payload
                   :chart/data (if (= payload "done")
                                 (:chart/data db)
                                 []))))

(re-frame/reg-event-db
 ::change-duration
 (fn-traced [db [_ payload]]
            (case payload
              :month  (let [start (endOfToday)]
                        (.setDate start (- (.getDate start) 31))
                        (assoc db :chart/end-date (endOfToday)
                               :chart/start-date start))
              :season (let [end (endOfToday)
                            start (addMonths end -3)]
                        (assoc db
                               :chart/end-date end
                               :chart/start-date start))
              :year (let [end (endOfYear (endOfToday))
                          start (startOfYear (startOfToday))]
                      (assoc db
                             :chart/end-date end
                             :chart/start-date start)))))
