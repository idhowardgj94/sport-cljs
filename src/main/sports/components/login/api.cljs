(ns sports.components.login.api 
  (:require [sports.firebase.auth :refer [login]]))

(defn login?
  "call firebase login to auth"
  [account password]
  (login account password))

