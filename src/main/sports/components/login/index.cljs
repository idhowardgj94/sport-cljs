(ns sports.components.login.index)

(defn login []
  [:div.max-w-xl.rounded.shadow-lg.mx-auto.flex-1
   [:h1.text-3xl.text-center "Login"]
   [:form.m-2
    [:div [:label {:for "name"} "Account"]
     [:input.appearance-none.ml-4.my-2 {:type "text" :name "account" :placeholder "please input account"}]]
    [:div [:label {:for "password"} "Password"]
     [:input.appearance-none.ml-4.my-2 {:name "password" :type "password" :placeholder "please input password"}]]
    [:button.bg-blue-700.p-2.text-white.hover:bg-blue-500.rounded {:type "submit"} "Login"]]])