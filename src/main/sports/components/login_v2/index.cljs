(ns sports.components.login-v2.index
  (:require
   [reagent.core :refer [as-element]]
   [reagent-mui.material.button :refer [button]]
   [reagent-mui.material.card :refer [card]]
   [reagent-mui.material.box :refer [box]]
   [reagent-mui.material.outlined-input :refer [outlined-input]]
   [reagent-mui.material.text-field :refer [text-field]]
   [reagent-mui.material.card-header :refer [card-header]]
   [reagent-mui.material.form-control-label :refer [form-control-label]]
   [reagent-mui.material.typography :refer [typography]]
   [reagent-mui.material.checkbox :refer [checkbox]]
   [reagent-mui.material.form-control :refer [form-control]]
   [reagent-mui.material.input-label :refer [input-label]]
   [reagent-mui.material.alert :refer [alert]]
   [reagent-mui.material.card-content :refer [card-content]]
   [sports.components.login.api :as a :refer [login?]]
   [sports.state :as state]
   [reagent-mui.material.container :refer [container]]))

(defn- get-form-value
  "get form value"
  [e name]
  (-> e
      (.-target)
      (aget name)
      (.-value)))

(defn- get-form-checked
  [e name]
  (-> e
      (.-target)
      (aget name)
      (.-checked)))

(defn handler [e]
  "handle submit"
  (.preventDefault e)
  (js/console.log e)
  (let [account (get-form-value e "account")
        password (get-form-value e "password")
        remember? (get-form-checked e "remember")]
    (js/console.log remember? "aoe" account password)
    (login? account password remember?)))

(defn login []
  (let [error (state/subscribe :validate-msg)]
    [container {:fixed true
                :max-width "lg"
                :sx {
                     :position "absolute"
                     :transform "translate(-50%, -50%)"
                     :-webkit-transform "translate(-50%, -50%)"
                     :-moz-transform "translate(-50%, -50%)"
                     :-o-transform "translate(-50%, -50%)"
                     :-ms-transform "translate(-50%, -50%)"
                     :top "30%"
                     :left "50%"
                     :align-items "center"
                     }}
     [card {:sx {:max-width 500
                 :padding "1em"
                 :margin "0 auto"
                 }}
      [typography {:variant "h3"
                   :text-align "center"
                   :gutter-bottom true} "Login"]
      [box {:component "form" :auto-complete "off" :on-submit handler :on-change state/login-clear-validage-msg}
       [box
        [text-field {:id "account"
                     :type "text"
                     :required true
                     :name "account"
                     :label "Account"
                     :placeholder "Account"
                     :full-width true
                     :margin "normal"
                     }]]
       [box
        [text-field {:id "password"
                     :required true
                     :label "Password"
                     :name "password"
                     :margin "normal"
                     :type "password"
                     :placeholder "Password"
                     :full-width true}]]

       [form-control-label {:control (as-element [checkbox {:value "remember"
                                                            :name "remember"
                                                            :color "primary"}])
                            :label "Remember me"}]
       (when error
         [alert {:severity "error" :margin "10px" :sx {:my "8px"}} error])

       [:div
        [button {:variant "contained"
                 :full-width true
                 :type "submit"} "login"]]
       ]
      ]

     ])
  )
