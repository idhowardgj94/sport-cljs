(ns sports.tools.route 
  (:require [reitit.frontend :as rf]))

;; route helper function
;; DEPRECATED: use match-by-name! instead of match-by-path
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

(defn get-page-name
  [match]
  (js/console.log "inside get-page-name")
  (:page-name (:path (:parameters match))))

(defn match-sub-path
  "given router, return subpath match. if not, return nil"
  [match]
  (when-let [matched  (rf/match-by-name! (:router (:data match))   (get-page-name match) )]
    (deliver-query matched match)))
