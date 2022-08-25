(ns sports.app
  (:require [reagent.dom :as dom]
            [sports.route :refer [init! match]]
            [sports.firebase.setup :refer [init-app]])
  (:require-macros [sports.config :refer [firebase-config]]))
(goog-define ENV "production")

(defonce config (firebase-config))

(defn app
  [] 
  [:div
   (if @match
     (let [view (:view (:data @match))]
       [view @match])
     "Not found")])

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (init!)
  (init-app config ENV)
  (dom/render [app]
              (.getElementById js/document "app")))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))
