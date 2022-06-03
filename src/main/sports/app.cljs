(ns sports.app
  (:require [reagent.dom :as dom]
            [sports.firebase.setup :refer [init-app]]
            [sports.components.login.index :refer [login]]
            [sports.components.main-page.index :refer [main-page]]
            [sports.state :refer [store]]))

(defn app
  []
  ;; (if (get @store :auth?)
    (main-page))
    ;;(login)))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (init-app)
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
