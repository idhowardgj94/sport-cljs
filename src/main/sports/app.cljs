(ns sports.app
  (:require [reagent.dom :as dom])
  (:require [cljss.core :refer-macros [defstyles]]))

(defstyles test-red []
  {:color "red"})

(defn app
  []
  [:div.lg:container.mx-auto.px-4 
   [:div.max-w-md.rounded.shadow-lg.mx-auto.test "hi"]])

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (dom/render [app]
    (.getElementById js/document "app")))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))
