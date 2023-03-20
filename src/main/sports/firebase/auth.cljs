(ns sports.firebase.auth
  (:require 
   [reitit.frontend.easy :as rfe]
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword onAuthStateChanged setPersistence browserLocalPersistence]]
   [sports.state :as s :refer [store]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [sports.events :as events]
   [re-frame.core :as re-frame]))

(defn- get-auth
  []
  (getAuth ))

(defn- connect-error!
  []
  (js/Error. "Didn't connect to firebase service."))

(defn set-rememberme
  []
  (setPersistence (get-auth) browserLocalPersistence))

(defn login
  "login user via email and password"
  [{:keys [app account password]}]
  (if (nil? app)
    (-> (signInWithEmailAndPassword (get-auth) account password)
        (.catch #(re-frame/dispatch [::events/login-validate-msg (.-message %)])))
    (connect-error!)))


(defn current-state!
  "check for current login state."
  []
  (let [auth (get-auth)
        user (.-currentUser auth)]
    (when (some? user)
      (re-frame/dispatch [::events/auth-change {:user (js->clj user)
                                                :auth? true}]))))

;; an observer to watch if a user is login or not
(defn setup-auth-listener
  []
  (re-frame/reg-fx
   :setup-auth-listener
   (fn-traced [_ _]
              (current-state!)
              (onAuthStateChanged
               (get-auth)
               (fn [user]
                 (if (some? user)
                   (re-frame/dispatch
                    [::events/auth-change {:user (js->clj user)
                                           :auth? true}])
                   (re-frame/dispatch [::events/auth-change {:user nil
                                                             :auth? false}]))
                 (rfe/push-state :index))))))

(defn login-effect
  []
  (re-frame/reg-fx
   :login
   (fn-traced [_ payload]
              (if (:remember? payload)
                (-> (set-rememberme)
                    (.then (fn [] (login payload))))
                (login payload)))))

(defn reg-auth-effect
  []
  (login-effect)
  (setup-auth-listener))


#_((defn create-user
     "create user with email and password"
     [email password]
     (if (connect-auth?)
       (-> (createUserWithEmailAndPassword (get-auth) email password)
           (.then #(do (swap! store assoc :user (.-user %))))
           (.catch #(do (print "catch")
                        (print "error happened!" (.-code %) (.-message %)))))
       (connect-error!))))
