(ns sports.events
  (:require [sports.state :refer [store]]
            [re-frame.core :as re-frame]
            ))
;; refactor: event out
(defn login-event!
  [u]
  (js/console.log "inside login event")
  (js/console.log (.-user u))
  (swap! store assoc :user (.-user u))
  (swap! store assoc :auth? true))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   {:auth? "loading"
    ;; this is route store.
    :match nil
    :validate-msg nil
    :app nil
    :user nil
    :index-db/db nil
    :exercise/loading "loading"
    :exercise/groups []
    :exercise/choose-date {:show false :date (js/Date.)}
    :chart/start-date nil
    :chart/end-date nil
    :chart/state "init"
    :chart/err-msg nil
    :chart/data []}))
