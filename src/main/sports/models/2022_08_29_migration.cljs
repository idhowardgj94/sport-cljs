;; FIXME: filename
(ns sports.models.migration
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword onAuthStateChanged setPersistence browserLocalPersistence]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]])
   (:require-macros [sports.config :refer [firebase-config]]))

;; This migration change firestore schema
;; records/user/:uid -> records (where uid = :uid)

;; DONE: init App
(def config (firebase-config))
(def dbdata (atom nil))
(def app (initializeApp (clj->js config)))
(def auth (getAuth app))
(def db (getFirestore app))

;; DONE: Login auth
(defn login
  [account password]
  (-> (signInWithEmailAndPassword auth account password)
      (.then #(js/console.log %))
      (.catch #(js/console.log %))))

;; DONE: get all record by user (now just one user, so just hard code)
(defn getData
  [data]
  (-> (.-docs data)
      (.map #(.data %))))

(go
  (let [docRef (collection (getFirestore) "records" "user" "BC7Eplqe9NftRiirrjakIvHMvRx2")
        data (<p! (getDocs docRef))]
    (try
      ;; store data into dbdata
      (reset! dbdata (getData data))
      (catch js/Error e (js/console.log (ex-cause e))))))

(def data-list (js->clj @dbdata :keywordize-keys true))

;; DONE: insert to records
(def new-data (as-> data-list $
                (map #(dissoc % :id) $)))

(go
  (try
    (doseq [it new-data]
     (let [collection (collection db "records")
           res  (<p! (addDoc collection (clj->js it)))]
       (js/console.log res)))
    (catch js/Error e (js/console.log e))))
