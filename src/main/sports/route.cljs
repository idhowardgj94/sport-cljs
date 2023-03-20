(ns sports.route
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [spec-tools.data-spec :as ds]
            [sports.state :refer [store subscribe]]
            [re-frame.core :as re-frame]
            [sports.components.record-exercise.index :refer [record-form-page record-exercise-page choose-exercise-page]]
            [sports.components.login-v2.index :refer [login]]
            [sports.components.main-page.index :refer [main-page]]
            [sports.components.chart-page.index :refer [chart-page]]
            [re-frame.core :as re-frame]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))
#_(require '[cljs.repl :refer [doc]])

(re-frame/reg-sub
 ::auth?
 (fn [db _]
   (:auth? db)))

(defn auth-p?
  "check if this user login or not"
  []
  (case @(re-frame/subscribe [::auth?])
    true (do
             (rfe/push-state :main-page {:page-name :record}))
    false (do
              (rfe/push-state :login))
    "loading" [:div (str "loading....")]
    (rfe/push-state :login)))

(defn- new-router
  [r]
  (rf/router r {:data {:coercion rss/coercion}}))

(defn login-middleware
  "check the auth pass or not.
  if login, than goto main-page
  "
  [page]
  (if @(re-frame/subscribe [::auth?])
    (do
        ;; Note: choose exercise is the main page
        (rfe/replace-state :main-page {:page-name :choose-exercise}))
    page))

(defn guard-middleware
  "this is the guard middlewrae
  if the user not login
  redirect to login."
  [page]
  (if @(re-frame/subscribe [::auth?])
    (do
      page)
    (do
      (rfe/push-state :login))))

(def routes
  [["/"
    {:name :index
     :view auth-p?}]
   ["/login"
    {:name :login
     :view #(login-middleware login)}]
   ["/main-page/:page-name"
    {:name :main-page
     :parameters {:path {:page-name keyword?}}
     :router (new-router
              [["/choose-exercise"
                {:name :choose-exercise
                 :view choose-exercise-page}]
               ["/record" 
                {:name :record
                 :view record-exercise-page}]
               ["/record-form"
                {:name :record-form
                 :parameters {:query {(ds/opt :name) string?}}
                 :view record-form-page}]
               ["/chart"
                {:name :chart
                 :view chart-page}]])
     :view #(guard-middleware main-page)}]])


(defn reg-route
  []
  (re-frame/reg-fx
   :setup-route
   (fn [_]
     (rfe/start!
      (rf/router routes {:data {:coercion rss/coercion}})
      (fn [m] (swap! store assoc  :match m))
      ;; set to false to enable HistoryAPI
      {:use-fragment true}))))
