(ns sports.components.main-page.index
  (:require [cljss.core :refer-macros [defstyles]]
            [sports.tools.route :refer [match-sub-path]]
            [clojure.string :refer [join]]
            [reitit.frontend :as rf]))

(defstyles deck
  []
  {:position "fixed"
   :width "100vw"
   :height "100px"
   :bottom "0px"})

(defstyles content
  []
  {:position "relative"
   :width "100vw"
   :height "calc(100vh - 100px)"
   :overflow "scroll"})

(defn content-view
  [match]
  (let [view (:view (:data match))]
    [:div.my-4 {:class [(content)]}
     [view match]]))

(defn deck-view
  []
  [:div.shadow-inner.flex.justify-center.items-center.bg-violet-100 {:class (deck)}
   [:button.bg-violet-100.hover:bg-violet-200.p-4.outline-none.shadow-none.appearance-none.border-none [:i.fa-solid.fa-house.fa-4x]]])

(defn main-page
  "This is the main page after login"
  [match]
  (let [sub-match (match-sub-path match)] 
    [:div [content-view sub-match] [deck-view]]))
