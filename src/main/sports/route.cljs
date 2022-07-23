(ns sports.route
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [spec-tools.data-spec :as ds]
            [sports.state :refer [store]]
            [sports.components.record-exercise.index :refer [record-form-page record-exercise-page choose-exercise-page]]
            [sports.components.login.index :refer [login]]
            [sports.components.main-page.index :refer [main-page]]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defonce match (r/atom nil))

(defn auth-p?
  "check if this user login or not"
  [] 
  (when (= false (:auth? @store))
    (rfe/push-state :login))
  (when (= true (:auth? @store))
    ;; TODO: can :page-name string be changed to :page-name :name?
    (rfe/push-state :main-page {:page-name :record}))
  [:div (str "loading...")])


(defn- new-router
  [r]
  (rf/router r {:data {:coercion rss/coercion}}))

(def routes
  [["/"
    {:name :index
     :view auth-p?}]
   ["/login"
    {:name :login
     :view login}]
   ["/main-page/:page-name"
    {:name :main-page
     :parameters {:path {:page-name string?}}
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
                 :view record-form-page}]])
     :view main-page}]])

(defn init! []
  (rfe/start! 
   (new-router routes)
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))