(ns sports.firebase.setup
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/firestore" :as firestore :refer [connectFirestoreEmulator getFirestore]]
   ["firebase/database" :as database :refer [connectDatabaseEmulator getDatabase]]
   ["firebase/auth" :as auth
    :refer [getAuth connectAuthEmulator]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [reitit.frontend.easy :as rfe]
   [sports.state :as s :refer [store]]
   [re-frame.core :as re-frame])
   ;; [sports.firebase.auth :refer [setup-auth-listener]])
  (:require-macros [sports.config :refer [firebase-config]]))

;; Note: for debug use
(defonce init (atom false))
(defonce config (firebase-config))
(defn get-app
  [store]
  (get @store :app))

(defn init-app
  [config env]
  (let [app  (initializeApp (clj->js config))]
    (when-not @init
      (let [auth (getAuth app)
            database (getDatabase app)
            firestore (getFirestore app)]
        (when (= env "development")
          (connectAuthEmulator auth "http://localhost:9099")
          (connectDatabaseEmulator database "localhost" 9000)
          (connectFirestoreEmulator firestore "localhost" 8080))
        (rfe/push-state :index)
        (reset! init true)))
    app))

#_((init-app)
   (login "howard2@gmail.com" "123456")
   (js/console.log @user)

   (create-user "idhowardgj94@gmail.com" "123456"))
