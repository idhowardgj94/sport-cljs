(ns sports.firebase.setup
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/firestore" :as firestore :refer [connectFirestoreEmulator getFirestore]]
   ["firebase/database" :as database :refer [connectDatabaseEmulator getDatabase]]
   ["firebase/auth" :as auth
    :refer [getAuth connectAuthEmulator]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [sports.state :as s :refer [store]])
  (:require-macros [sports.config :refer [firebase-config]]))

;; Note: for debug use
(defonce init (atom false))
(defonce config (firebase-config))

(defn get-app
  [store]
  (get @store :app))

(defn init-app
  ([]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (let [auth (getAuth (get-app store))
         database (getDatabase (get-app store))
         firestore (getFirestore (get-app store))]
     (when-not @init
       (connectAuthEmulator auth "http://localhost:9099")
       (connectDatabaseEmulator database "localhost" 9000)
       (connectFirestoreEmulator firestore "localhost" 8080)
       (print "init app done")
       (reset! init true))))
  ([config]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (getAuth (get @store :app))))


#_((init-app)
   (login "howard2@gmail.com" "123456")
   (js/console.log @user)

   (create-user "idhowardgj94@gmail.com" "123456"))

