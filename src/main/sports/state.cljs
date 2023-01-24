(ns sports.state
  (:require
   [reitit.frontend.easy :as rfe]
   [reagent.core :as r]))

(def store
  ;; Note: auth may be "loading", "true" or "false"
  (r/atom {:auth? "loading"
           ;; this is route store.
           :match nil
           :validate-msg nil
           :app nil
           :user nil
           :index-db/db nil
           :exercise/groups []
           :exercise/choose-date {:show false :date (js/Date.)}
           ;; "loading" "success" "error" "init"
           :chart/start-date nil
           :chart/end-date nil
           :chart/state "init"
           :chart/err-msg nil
           :chart/data []}))

(defn set-index-db
  "set indexdb into store"
  [db]
  (swap! store assoc :index-db/db db))

(defn get-index-db
  "get-index-db from store"
  []
  (get @store :index-db/db)
  )

(defn subscribes
  "subscribe store by key
  This is worked. so sub function deprecated
  due to this implementation is more simple to use."
  [& keys]
  (select-keys @store keys))

(defn subscribe
  [key]
  (get @store key))

(defn get-uid
  "get the uid from store."
  []
  (.-uid (:user @store)))

(defn login-clear-validage-msg
  []
  (when (@store :validate-msg)
    (swap! store assoc :validate-msg nil)))
#_(
   (require '[cljs.repl :refer [doc]])
   (doc swap!)
   (rfe/push-state :login)
   (rfe/push-state :login)
   (swap! store assoc :auth? nil)
   (js/console.log "123")
   ,)
