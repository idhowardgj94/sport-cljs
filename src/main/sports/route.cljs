(ns sports.route
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss] 
            [sports.state :refer [store]]
            [sports.components.login.index :refer [login]] 
            [sports.components.main-page.index :refer [main-page]]))

(defonce match (r/atom nil))


(defn auth-p?
  "check if this user login or not"
  []
  (js/console.log "inside auth-p?")
  (if (not= true (:auth? @store))
    (rfe/push-state :login)
    (rfe/push-state :main-page))
  [:div (str "loading..." (:data @match))])


(def routes
  [["/"
    {:name :index
     :view auth-p?}]
   ["/login"
    {:name :login
     :view login}]
   ["/main-page"
    {:name :main-page
     :view main-page}]])

(defn init! []
  (rfe/start! 
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))