(ns sports.state
  (:require [reagent.core :as r]))

(def store 
  (r/atom {:auth? false
           :validate-msg nil
           :app nil
           :user nil}))