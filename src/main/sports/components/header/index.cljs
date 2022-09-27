(ns sports.components.header.index
  (:require
   [cljss.core :refer-macros [defstyles]]
   [reagent.core :as r]
   [reitit.frontend.easy :as rfe]))

(defstyles head-layout
  []
  {:height "50px"})

(defn head
  [children ]
  ;(js/console.log (clj->js t) (clj->js c))
    [:header.flex.flex-row.justify-center {:class (head-layout)}
     children])
