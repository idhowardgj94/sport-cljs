(ns sports.firebase
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth :refer [getAuth connectAuthEmulator]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]))

(def firebase-config
  {:apiKey "AIzaSyBPARs63a-_ed_Kl6M61H1b-c_YILiKJEc"
   :authDoomain "sport-app-dadcc.firebaseapp.com"
   :projectId "sport-app-dadcc"
   :storageBucket "sport-app-dadcc.appspot.com"
   :messagingSenderId "995715164039"
   :appId "1:995715164039:web:e84afd59557f1076271522"
   :measurementId "G-4FNN9PWE6R"})

;; :apiKey "AIzaSyBPARs63a-_ed_Kl6M61H1b-c_YILiKJEc"
(defonce app (atom nil))

(defn init-app
  []
  (reset! app (initializeApp (clj->js firebase-config))))
(clj->js firebase-config)
(init-app)
(getAuth @app)




(connectAuthEmulator auth "http://localhost:9099")
