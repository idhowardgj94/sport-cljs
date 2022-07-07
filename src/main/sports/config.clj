(ns sports.config
  (:require [dotenv :refer [env app-env]]))

(defn get-env
  [name]
  (env name))

;; TODO: manage firebase-config
(defmacro firebase-config
  []
  {:apiKey (get-env "API_KEY")
   :authDoomain (get-env "AUTH_DOMAIN")
   :projectId (get-env "PROJECT_ID")
   :storageBucket (get-env "STORAGE_BUCKET")
   :databaseURL (get-env "DATABASE_URL")
   :messagingSenderId (get-env "MESSAGING_SENDER_ID")
   :appId (get-env "APP_ID")
   :measurementId (get-env "MEASUREMENT_ID")})
