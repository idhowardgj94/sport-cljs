(ns sports.firebase
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth :refer [getAuth connectAuthEmulator createUserWithEmailAndPassword]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]))
  ;;  [cljs.core.async :refer [go]]
  ;;  [cljs.core.async.interop :refer-macros [<p!]]))

;; TODO: manage firebase-config
(def firebase-config
  {})

;; :apiKey "AIzaSyBPARs63a-_ed_Kl6M61H1b-c_YILiKJEc"
(defonce app (atom nil))

(defn get-auth
  []
  (getAuth @app))

(defn init-app
  ([]
   (print "1")
   (reset! app (initializeApp (clj->js firebase-config)))
   (print "2")
   (let [auth (get-auth)]
     (connectAuthEmulator auth "http://localhost:9099")))
  ([firebase-config]
   (reset! app (initializeApp (clj->js firebase-config)))))

(defn connect-auth?
  []
  (not= @app nil))

(defn create-user
  "create user with email and password"
  [email password]
  (if (connect-auth?)
    (-> (createUserWithEmailAndPassword (get-auth) email password)
        (.then #(do (print "then")
                    (js/console.log (.-user %))))
        (.catch #(do (print "catch")
                     (print "error happened!" (.-code %) (.-message %)))))
    (js/Error. "Didn't connect to firebase service.")))
(init-app)
(create-user "howard2@gmail.com" "123456")
