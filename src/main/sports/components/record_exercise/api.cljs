(ns sports.components.record-exercise.api
  (:require
   [sports.firebase.exercise :refer [add-exercise!]]
   [sports.state :refer [store]]))

(defn add-exercise-record!
  [data]
  (js/console.log "inside add exercise record!")
  (js/console.log (clj->js data))
  (js/console.log (.-uid (:user @store)))
  (when-let [uid (.-uid (:user @store))] 
    (add-exercise! data, uid)))