(ns sports.route
  (:require [reagent.core :as r] 
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss] 
            [sports.state :refer [store]]
            [sports.components.record-exercise.index :refer [record-exercise-page]]
            [sports.components.login.index :refer [login]] 
            [sports.components.main-page.index :refer [main-page]]))

(defonce match (r/atom nil))

(defn auth-p?
  "check if this user login or not"
  []
  (js/console.log "inside auth-p?")
  (if (not= true (:auth? @store))
    (rfe/push-state :login)
    (rfe/push-state :main-page {:page-name "record"}))
  [:div (str "loading..." (:data @match))])


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
              [["/record" 
                {:name :record-exercise
                 :view record-exercise-page}]])
     :view main-page}]])

(defn init! []
  (rfe/start! 
   (new-router routes)
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))