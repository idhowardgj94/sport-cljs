(ns sports.new-app
  (:require [reagent.dom :as dom]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [re-frame.core :as re-frame]
            [sports.route :refer [init!]]
            [sports.state :refer [store]]
            [cljs.spec.alpha :as s]
            [sports.indexdb :refer [sync-firebase-exercise
                                    get-firebase-exercise
                                    setup-index-db]]
            [cljss.core :as css]
            [sports.firebase.setup :refer [init-app]])
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


(defn *app
  []
  [:div
   (if (@store :match)
     (let [view (:view (:data (@store :match)))]
       [view (@store :match)])
     "Not found")])


(defn app
  ;; psuedo endpoint
  []
  [:h1 "hello, world"])

(defn bootstrap-app
  "setup app related service"
  []
  (setup-index-db)
  (init!)
  (init-app config ENV)
  )
(defn ^:dev/after-load mount-root
  []
  (css/remove-styles!)
  (re-frame/clear-subscription-cache!)
  (rdom/render [app]
               (.getElementById js/document "app")))

(defn init
  []
  (js/console.log "inside init")
  ;; TODO initialize db
  ;; (re-frame/dispatch-sync [::event/initialize-db])
  (mount-root))
