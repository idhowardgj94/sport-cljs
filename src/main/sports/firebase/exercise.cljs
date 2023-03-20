(ns sports.firebase.exercise
  (:require
   [sports.models.exercise :as model]
   [goog.object :as o]
   [cljs.spec.alpha :as s]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]
   ["regenerator-runtime/runtime"]
   ["firebase/firestore" :as firestore :refer [setDoc doc collection addDoc getDocs getFirestore getDoc getDocs where query deleteDoc]]
   ))
;; TODO: error handling

(defn add-group!
  "add new groups into firebase"
  [group]
  (s/assert model/group-spec group)
    (let [collection (collection (getFirestore) "groups")]
        (addDoc collection (clj->js group))))

(defn get-groups
  "get groups from firestore"
  []
  (let [collection (collection (getFirestore) "groups")
        data (getDocs collection)]
    (-> data
        (.then
         (fn[data]
           (as->  (.-docs data) $
             (.map $ #(let [data (.data %)]
                        data))
             (js->clj $ :keywordize-keys true))))
        )))

(defn get-exercise-items
  "get exercises by gid"
  [gid]
  (let [collection (collection (getFirestore) "exerciseItems")
        query (query collection
                     (where "gid" "==" gid))
        data (getDocs query)]
    (-> data
        (.then
         (fn [data]
           (as-> (.-docs data) $
             (.map $ #(let [data (.data %)]
                        data))
             (js->clj $ :keywordize-keys true)))))))

(defn add-exercise!
  [data]
  (-> (collection (getFirestore) "records")
      (addDoc (clj->js data ))))

(defn get-exercises
  [uid date exercise-id]
  (let [collection (collection (getFirestore) "records")
        query (query collection
                     (where "date" "==" date)
                     (where "exerciseId" "==" exercise-id)
                     (where "uid" "==" uid))]
    (-> (getDocs query)
        (.then (fn [data]
                 (as-> (.-docs data) $
                   (.map $ #(let [data (.data %)]
                              (o/set data "id" (.-id %))
                              data))
                   (js->clj $ :keywordize-keys true)
                   (map model/newExerciseRecord $))))
        (.catch #(do (js/console.error %))))))

(defn delete-exercise!
  [id]
  (let [docRef (doc (getFirestore) "records" id)]
    (deleteDoc docRef)))

