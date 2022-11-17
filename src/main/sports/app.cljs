(ns sports.app
  (:require [reagent.dom :as dom]
            [reagent.core :as core]
            [sports.route :refer [init!]]
            [sports.state :refer [store]]
            [cljs.spec.alpha :as s]
            [cljss.core :as css]
            [sports.firebase.setup :refer [init-app]])
  (:require-macros [sports.config :refer [firebase-config]]))

(def functional-compiler (reagent.core/create-compiler {:function-components true}))

;; Setting compiler as the default
(core/set-default-compiler! functional-compiler)

(s/check-asserts true)

(goog-define ENV "production")

(defonce config (firebase-config))

(defn app
  [] 
  [:div
   (if (@store :match)
     (let [view (:view (:data (@store :match)))]
       [view (@store :match)])
     "Not found")])

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  ;; Note: this may break functionality of tailwindcss.
  ;; Need to find another solution to solve this
  (css/remove-styles!)
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

#_(
   (doc css/remove-styles!)
   (require '[cljs.repl :refer [doc]])
   ,)
