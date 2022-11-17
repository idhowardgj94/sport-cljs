(ns user
  (:require
   [sports.models.exercise :refer [group]]
   [sports.components.record-exercise.util :as u]
   [reitit.frontend.easy :as rfe]
   [sports.state :as state :refer [store]]
   [sports.firebase.chart :as c]))

(defn skip-login!
  [bool]
  (case bool
    true (swap! store assoc :auth? true)
    false (swap! store assoc :auth? false))
  (rfe/push-state :index))
