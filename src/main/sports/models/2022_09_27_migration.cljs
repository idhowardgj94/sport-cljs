(ns sports.models.2022-09-27-migration
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/auth" :as auth
    :refer [getAuth signInWithEmailAndPassword createUserWithEmailAndPassword onAuthStateChanged setPersistence browserLocalPersistence]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [goog.object :as o]))

;; TODO: Login to migration toolset
(defn login
  [account password]
  (-> (signInWithEmailAndPassword auth account password)
      (.then #(js/console.log %))
      (.catch #(js/console.log %))))

(defn get-docs-with-id
  [data]
  (js/console.log "inside get-docs-with-id")
  (as-> (.-docs data) $
    (.map $ #(let [data (.data %)]
               (o/set data "id" (.-id %))
               data))))


;; get original data by uid
(def temp (atom nil))
(go
  (let [collection (collection (getFirestore) "records")
        query (query collection
                     (where "uid" "==" "BC7Eplqe9NftRiirrjakIvHMvRx2"))
        output (<p! (getDocs query))]
    (try
      (print (get-docs-with-id output))
      (reset! temp (get-docs-with-id output))
      (catch js/Error e (js/console.log (ex-cause e))))
    ))

;; transform to clj-data
(def clj-data (js->clj @temp :keywordize-keys true))
;; transform to new data
(def new-data (->> clj-data
     (map #(assoc % :date (js/Date. (:date %))))
     (into (vector))
))

;; transform data to new data
(go
  (doseq [it new-data]
    (let [id (:id it)
          doc (doc (getFirestore) "records" id)
          data (dissoc it :id)]
      (try
        (js/console.log "strat")
        (js/console.log id)
        (js/console.log doc)
        (js/console.log (clj->js data))
        (<p! (setDoc doc (clj->js data)))
        (js/console.log "done")
        (catch js/Error e (js/console.log "error!" (ex-cause e)))))))
