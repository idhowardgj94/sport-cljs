(ns sports.components.record-exercise.event)

;; TODO: use something like redux pattern to handler event?
;; connect to firebase
(defn record-change-event!
  [key records & _]
  (js/console.log "inside record change event")
  (js/console.log (clj->js key))
  (js/console.log (str @records)))
