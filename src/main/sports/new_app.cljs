(ns sports.new-app
  (:require
   [cljs.spec.alpha :as s]
   [cljss.core :as css]
   [sports.components.chart-page.effect :refer [reg-chart-page-effect]]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]
   [sports.events :as events]
   [sports.firebase.auth :refer [reg-auth-effect]]
   [sports.indexdb :refer [reg-index-db-effect]]
   [sports.route :refer [reg-route]]
   [sports.state :refer [store]])
  (:require-macros [sports.config :refer [firebase-config]]))

(def functional-compiler (reagent.core/create-compiler {:function-components true}))
(reagent/set-default-compiler! functional-compiler)

;; check the assert, if assert not pass will generate a runtime error
(s/check-asserts true)

;; define ENV in complie time
(goog-define ENV "production")

;; get the firebase config using config macro
;; macro generate in compile time.
(defonce config (firebase-config))

(defn app
  []
  [:div
   (if (@store :match)
     (let [view (:view (:data (@store :match)))]
       [view (@store :match)])
     "Not found")])

(defn bootstrap-app
  "setup app related service"
  []
  (re-frame/dispatch-sync [::events/initialise-db])
  (reg-index-db-effect)
  (reg-route)
  (reg-auth-effect)
  (reg-chart-page-effect)
  (re-frame/dispatch-sync [::events/initialise-app config ENV]))

(defn ^:dev/after-load mount-root
  []
  (css/remove-styles!)
  (re-frame/clear-subscription-cache!)
  (rdom/render [app]
               (.getElementById js/document "app")))

(defn init
  []
  (js/console.log "inside init")
  (bootstrap-app)
  (mount-root))

#_((init)
   (require '[cljs.repl :refer [doc]])
   (doc re-frame/dispatch-sync)
   (doc re-frame/reg-fx))
