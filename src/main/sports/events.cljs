(ns sports.events
  (:require [sports.state :refer [store]]))
;; refactor: event out
(defn login-event!
  [u]
  (js/console.log "inside login event")
  (js/console.log (.-user u))
  (swap! store assoc :user (.-user u))
  (swap! store assoc :auth? true))


