(ns sports.firebase.setup
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth connectAuthEmulator signInWithEmailAndPassword createUserWithEmailAndPassword]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [sports.state :as s :refer [store]])
  (:require-macros [sports.config :refer [firebase-config]]))

;; Note: for debug use
(defonce init (atom false))
(defonce config (firebase-config))
(defn init-app
  ([]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (let [auth (getAuth (get @store :app))]
     (when-not true @init
               (connectAuthEmulator auth "http://localhost:9099")
               (reset! init true))))
  ([config]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (getAuth (get @store :app))))


#_((init-app)
   (login "howard2@gmail.com" "123456")
   (js/console.log @user)

   (create-user "idhowardgj94@gmail.com" "123456"))

