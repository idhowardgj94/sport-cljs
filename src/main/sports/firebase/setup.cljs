(ns sports.firebase.setup
  (:require
   ["regenerator-runtime/runtime"]
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
   (let [auth (getAuth (get @store :app))
         database (getDatabase (get @store :app))]
     (when-not @init
       (js/console.log "DEBUG yo")
       (connectAuthEmulator auth "http://localhost:9099")
       (connectDatabaseEmulator database "localhost" 9000)
       (reset! init true))))
  ([config]
   (swap! store assoc :app (initializeApp (clj->js config)))
   (getAuth (get @store :app))))


#_((init-app)
   (login "howard2@gmail.com" "123456")
   (js/console.log @user)

   (create-user "idhowardgj94@gmail.com" "123456"))

