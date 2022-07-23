(ns sports.state
  (:require [reagent.core :as r]))

(def store 
  (r/atom {:auth? nil
           :validate-msg nil
           :app nil
           :user nil}))