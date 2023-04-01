(ns sports.components.login.api 
  (:require [sports.firebase.auth :refer [login set-rememberme]]
            [sports.state :refer [store]]
            [reitit.frontend.easy :as rfe]
            ;; [sports.events :refer [login-event!]]
            ))

(defn- login-action
  "perform login action"
  [account password]
  (login account password))
         ;; TODO
        ;;  #(do (login-event! %)
         ;;     (rfe/push-state :index))))

(defn login?
  "call firebase login to auth"
  [account password remember?]
  (if remember?
    (-> (set-rememberme)
        (.then (fn [] (login-action account password))))
    (login-action account password))
 )

