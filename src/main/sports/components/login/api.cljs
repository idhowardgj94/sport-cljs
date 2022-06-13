(ns sports.components.login.api 
  (:require [sports.firebase.auth :refer [login set-rememberme]]
            [sports.state :refer [store]]
            [reitit.frontend.easy :as rfe]))

(defn- login-action
  "perform login action"
  [account password]
  (login account password
         #(do (swap! store assoc :user (.-user %))
              (swap! store assoc :auth? true)
              (js/console.log (clj->js @store))
              (js/console.log "inside then")
              (rfe/push-state :index))))

(defn login?
  "call firebase login to auth"
  [account password]
  (-> (set-rememberme)
      (.then (fn [] (login-action account password))))
 )

