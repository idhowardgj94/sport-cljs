(ns sports.events
  (:require [sports.state :refer [store]]
            [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [sports.firebase.setup :refer [init-app]]
            [cljs.spec.alpha :as s]
            [spec-tools.data-spec :as ds]
            [sports.firebase.exercise :as exercise]))
;; refactor: event out
(defn login-event!
  [u]
  (swap! store assoc :user (.-user u))
  (swap! store assoc :auth? true))

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
    :exercise/loading "loading"
    :exercise/groups []
    :exercise/choose-date {:show false :date (js/Date.)}
    :chart/start-date nil
    :chart/end-date nil
    :chart/state "init"
    :chart/err-msg nil
    :chart/data []}))

(re-frame/reg-event-db
 ::setup-groups
 (fn-traced [db [_ groups]]
            (assoc db :exercise/groups groups)))

(re-frame/reg-event-db
 ::firebase-app
 (fn-traced [db [_ app]]
            (assoc db :app app)))

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
 (fn-traced [_ _]
            (js/console.log "TODO")))
