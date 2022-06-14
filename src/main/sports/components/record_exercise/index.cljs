(ns sports.components.record-exercise.index
  (:require
   [reagent.core :as r]
   [cljss.core :refer-macros [defstyles]]
   [sports.state :refer [store]]))

(defn record-exercise-page
  "content for record exercise"
  []
  [:div.text-9xl "hello, record-exercise-page"])