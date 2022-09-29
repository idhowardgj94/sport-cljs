(ns sports.util)

(defn json->edn
 [data]
 (js->clj data :keywordize-keys true))

(defn orginize-js-data
  [data]
  (js/console.log "inside orgnize-js-data")
  (as-> (.-docs data) $
    (.map $ #(let [data (.data %)]
               (o/set data "id" (.-id %))
               data))
    ))
