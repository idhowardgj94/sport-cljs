(ns sports.firebase.util
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword onAuthStateChanged setPersistence browserLocalPersistence]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [goog.object :as o])
  (:require-macros [sports.config :refer [firebase-config]]))

(def config (firebase-config))
(def app (initializeApp (clj->js config)))
(def auth (getAuth app))
(def db (getFirestore app))

(defn login
  "Login to firebase auth"
  [account password]
  (-> (signInWithEmailAndPassword auth account password)
      (.then #(js/console.log %))
      (.catch #(js/console.log %))))
