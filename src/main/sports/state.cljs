(ns sports.state
  (:require
   [reagent.core :as r]))

(def store
  ;; Note: auth may be "loading", "true" or "false"
  (r/atom {:auth? "loading"
           ;; this is route store.
           :match nil
           :validate-msg nil
           :app nil
           :user nil
           :exercise/groups []
           ;; "loading" "success" "error" "init"
           :chart/start-date nil
           :chart/end-date nil
           :chart/state "init"
           :chart/err-msg nil
           :chart/data []}))
(:chart/state @store)
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
