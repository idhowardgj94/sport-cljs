(ns sports.state
  (:require
   [reagent.core :as r]))

(def store
  (r/atom {:auth? nil
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

(defn sub
  [id keys]
  (let [subject (r/atom (select-keys @store keys))]
  (add-watch store id (fn [_ _ old new]
                  (reset! subject (select-keys @store keys))))
  subject))

(defn unsub
  [id]
  (remove-watch store id))
(remove-watch store ::tets)

(defn get-uid
  "get the uid from store."
  []
  (.-uid (:user @store)))
