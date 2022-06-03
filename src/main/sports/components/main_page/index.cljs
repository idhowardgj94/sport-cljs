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

(defn main-page
  "This is the main page after login"
  []
  [:div
   [:div.container.bg-yellow-100.mx-auto.text-5xl "main page"]
   [:div.shadow-inner.flex.justify-center.items-center.bg-blue-100 {:class (deck)}
    [:div.bg-yellow-200 [:i.fa-solid.fa-user.fa-4x]]]]
  )

