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

(defn deliver-query
  "aim to pass query down to sub router"
  [matched match]
  (assoc-in matched [:query-params] (:query-params match)))

(defn match-sub-path
  "given router, return subpath match. if not, return nil"
  [match]
  (when-let [matched  (rf/match-by-path (:router (:data match))  (get-sub-path match))]
    (deliver-query matched match)))