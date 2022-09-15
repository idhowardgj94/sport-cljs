(ns sports.components.main-page.index
  (:require [cljss.core :refer-macros [defstyles]]
            [sports.tools.route :refer [match-sub-path]]
            [sports.state :refer [store]]
            [clojure.string :refer [join]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]))

(defstyles deck
  []
  {:position "fixed"
   :width "100%"
   :height "50px"
   :bottom "0px"})

(defstyles content
  []
  {:position "relative"
   :width "100vw"
   :height "calc(100vh)"
   :overflow "scroll"})

(defn content-view
  [match]
  (let [view (:view (:data match))]
    [:div {:class [(content)]}
     [view match]]))

(defn deck-view
  []
  [:div.shadow-inner.flex.justify-center.items-center.bg-violet-100.container {:class (deck)}
   [:div.flex-1.items-center.flex.justify-center
    [:button.bg-violet-100.hover:bg-violet-200.p-2.outline-none.shadow-none.appearance-none.border-none
     {:on-click #(rfe/push-state :main-page {:page-name :record})} [:i.fa-solid.fa-house]]]
   [:div.flex-1.items-center.flex.justify-center
    [:button.bg-violet-100.hover:bg-violet-200.p-2.outline-none.shadow-none.appearance-none.border-none
     {:on-click #(rfe/push-state :main-page {:page-name :chart})}[:i.fa-solid.fa-pen-to-square]]]])

(defn main-page
  "This is the main page after login"
  [match]
  (let [sub-match (match-sub-path match)]
    [:div.mx-auto.container [content-view sub-match] [deck-view]]))
