(ns sports.firebase.auth
  (:require 
   [reitit.frontend.easy :as rfe]
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword onAuthStateChanged setPersistence browserLocalPersistence]]
   [sports.state :as s :refer [store]]))

(defn- get-auth
  []
  (getAuth (get @store :app)))

(defn- connect-auth?
  []
  (not= (get @store :app) nil))

(defn- connect-error!
  []

  (js/Error. "Didn't connect to firebase service."))

(defn set-rememberme
  []
  ;; TODO: give option set remeber or not
  (js/console.log "inside set-rememberme")
  (setPersistence (get-auth) browserLocalPersistence))

(defn login
  "login user via email and password"
  [email password fn]
  (if (connect-auth?)
    (-> (signInWithEmailAndPassword (get-auth) email password)
        (.then fn)
        (.catch #(swap! store assoc :validate-msg (.-message %))))
    (connect-error!)))

(defn current-state!
  "check for current login state."
  []
  (let [auth (get-auth)
        user (.-currentUser auth)]
    (when (some? user)
      (swap! store assoc :user (.-user user))
      (swap! store assoc :auth? true))))

;; an observer to watch if a user is login or not
;; TODO: to events ?
(defn setup-auth-listener
  []
  (current-state!)
  (onAuthStateChanged (get-auth)
    (fn [user] 
      (if (some? user)
        (do ;; TODO: it can abstract to an event
          (swap! store assoc :user (js->clj user))
          (swap! store assoc :auth? true))
        (do ;; TODO: it can abstract to a event
            (swap! store assoc :user nil)
            (swap! store assoc :auth? false)))
      (rfe/push-state :index))))

#_((defn create-user
     "create user with email and password"
     [email password]
     (if (connect-auth?)
       (-> (createUserWithEmailAndPassword (get-auth) email password)
           (.then #(do (swap! store assoc :user (.-user %))))
           (.catch #(do (print "catch")
                        (print "error happened!" (.-code %) (.-message %)))))
       (connect-error!))))
