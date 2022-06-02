(ns sports.firebase (:require
                     ["regenerator-runtime/runtime"]
                     ["firebase/auth" :as auth
                      :refer [getAuth connectAuthEmulator signInWithEmailAndPassword createUserWithEmailAndPassword]]
                     ["firebase/app" :as firebase-app :refer [initializeApp]]
                     [sports.state :as s :refer [store]])
  (:require-macros [sports.config :refer [firebase-config]]))

  ;;  [cljs.core.async :refer [go]]
  ;;  [cljs.core.async.interop :refer-macros [<p!]]))

;; :apiKey "AIzaSyBPARs63a-_ed_Kl6M61H1b-c_YILiKJEc"
;; (defonce app (atom nil))
;; (defonce user (atom nil))
(defonce config (firebase-config))
(defn init-app
  ([]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (let [auth (getAuth (get @store :app))]
     (connectAuthEmulator auth "http://localhost:9099")))
  ([config]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (getAuth (get @store :app))))

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


#_((init-app)
   (login "howard2@gmail.com" "123456")
   (js/console.log @user)

   (create-user "idhowardgj94@gmail.com" "123456"))

