(ns sports.tools.route 
  (:require [reitit.frontend :as rf]))

;; route helper function
(defn get-sub-path
  "given router, return subpath prefix by /"
  [match]
  (as-> (:path (:parameters match)) $
      (first $)
      (get $ 1)
      (str "/" $)))

(defn match-sub-path
  "given router, return subpath match. if not, return nil"
  [match]
  (rf/match-by-path (:router (:data match))  (get-sub-path match)))