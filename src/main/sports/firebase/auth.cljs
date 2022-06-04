(ns sports.firebase.auth
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword]]
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

(defn create-user
  "create user with email and password"
  [email password]
  (if (connect-auth?)
    (-> (createUserWithEmailAndPassword (get-auth) email password)
        (.then #(do (swap! store assoc :user (.-user %))))
        (.catch #(do (print "catch")
                     (print "error happened!" (.-code %) (.-message %)))))
    (connect-error!)))

(defn login
  "login user via email and password"
  [email password]
  (if (connect-auth?)
    (-> (signInWithEmailAndPassword (get-auth) email password)
        (.then #(do (swap! store assoc :user (.-user %))
                    (swap! store assoc :auth? true)
                    (js/console.log "good")))
        (.catch #(swap! store assoc :validate-msg (.-message %))))
    (connect-error!)))