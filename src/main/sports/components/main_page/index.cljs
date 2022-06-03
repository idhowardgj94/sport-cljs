(ns sports.components.main-page.index
  (:require
   [reagent.core :as r]
   [cljss.core :refer-macros [defstyles]]
   [sports.state :refer [store]]))

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
  []
  [:div.my-4 {:class [(content)]}
   [:h1.container.bg-yellow-100.mx-auto.text-6xl.text-center.my-4 "main page"]])

(defn deck-view
  []
  [:div.shadow-inner.flex.justify-center.items-center.bg-violet-100 {:class (deck)}
   [:button.bg-violet-100.hover:bg-violet-200.p-4.outline-none.shadow-none.appearance-none.border-none [:i.fa-solid.fa-house.fa-4x]]])

(defn main-page
  "This is the main page after login"
  []
  [:div (content-view) (deck-view)])

