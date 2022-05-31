(ns sports.components.login.index
  (:require [reagent.core :as r]
            [sports.components.login.api :as a :refer [login?]]
            [sports.firebase :refer [user]]))

;; TODO delete 
(def counter (r/atom 1))

(defn- get-form-value
  "get form value"
  [e name]
  (-> e
      (.-target)
      (.-form)
      (aget name)
      (.-value)))


(defn login []
  [:div.max-w-xl.rounded.shadow-lg.mx-auto.flex-1
   [:h1.text-3xl.text-center "Login"]
   [:form.m-2
    [:div [:label {:for "name"} "Account"]
     [:input.appearance-none.ml-4.my-2 {:type "text" :name "account" :placeholder "please input account"}]]
    [:div [:label {:for "password"} "Password"]
     [:input.appearance-none.ml-4.my-2 {:name "password" :type "password" :placeholder "please input password"}]]
    [:button.bg-blue-700.p-2.text-white.hover:bg-blue-500.rounded
     {:type "submit"
      :on-click #(do (.preventDefault %)
                     (let [account (get-form-value % "account")
                           password (get-form-value % "password")]
                       (login? account password))
                     (swap! counter inc))} "Login"]]])

(add-watch counter nil #(do (js/console.log @counter)))
(add-watch user nil #(do (js/console.log @user)))
;; (add-watch)