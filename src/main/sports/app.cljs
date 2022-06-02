(ns sports.app
  (:require [reagent.dom :as dom]
            [sports.firebase :refer [init-app]]
            [sports.components.login.index :refer [login]]
            [sports.state :refer [store]]))

(def t {:auth? nil})

(defn app
  []
  (if-let  [auth? (get @store :auth?)]
    (do
      (js/console.log "watch wtach see: " auth?)
      [:button.p-2.bg-blue-400.text-white
       {:on-click #(do (js/console.log auth?)
                       (swap! store assoc :auth? false))} "hello"])
    
    (login)))

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
