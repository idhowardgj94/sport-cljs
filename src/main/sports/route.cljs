(ns sports.route 
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [sports.components.login.index :refer [login]]
            [sports.components.main-page.index :refer [main-page]]))

(defonce match (r/atom nil))

(def routes
  [["/"
    {:name :frontpage
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