(ns sports.models.script
  (:require
   ["regenerator-runtime/runtime"]
   ["firebase/database" :as database :refer [connectDatabaseEmulator getDatabase]]
   ["firebase/auth" :as auth
    :refer [getAuth connectAuthEmulator]]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc where query deleteDoc]]
   ["firebase/app" :as firebase-app :refer [initializeApp]]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [sports.models.exercise :refer [group]])
  (:require-macros [sports.config :refer [firebase-config]]))

(print group)

;; TODO: connect to production firebase
(def dbdata (atom nil))
(def config (firebase-config))

;; initialze firebase app
(def app (initializeApp  (clj->js config)))
;; init database
(def firestore (getFirestore app))

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

;; we can get the nth 0 number and transform to map
;; and see if the data is correct or not.
(print (js->clj (nth @dbdata 0) :keywordize-keys true))

(js/console.log @dbdata)
(-> @dbdata
    (.map (fn [it] it)))

;; js array -> clj vector
(def data-list (js->clj @dbdata :keywordize-keys true))

(print group)

;; get exercise
(defn get-exercises
  "This is a helper function to get all exercises from group map"
  []
  (->> group
       (map #(:exercises %))
       (#(apply concat %))))

(defn get-id-by-name
  "Given exercise name, return exercise id"
  [name]
  (->> (get-exercises)
       (filter #(= name (:name %)))))

;; append id into document
;; don't delete original exercise name yet.
;; DONE: append exerciseId
(def newdata (for [it data-list]
               (do
    ;; remove exercise, to exerciseId
                 (let [{:keys [exercise]} it
                       res (-> (transient it)
                  ;; (dissoc! :exercise)
                               (assoc! :exerciseId (:id (first (get-id-by-name exercise))))
                               (persistent!))]
                   res))))

(print newdata)

;; Done Update original data
(defn update-db-data
  "Update the newData back to db"
  []
  (for [it newdata]
    (let [uid (:uid it)
          id (:id it)
          docRef (doc (getFirestore) "records" "user" uid id)]
      (js/console.log "Update docs uid: " uid ", id: " id)
      (-> (setDoc docRef (clj->js it))
          (.then #(js/console.log "update done"))
          ,))))

(update-db-data)
;; Refactor: record/user/:userId -> record (user in document field)
