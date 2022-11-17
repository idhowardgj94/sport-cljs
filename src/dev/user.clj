(ns user
  (:require [clojure.repl :refer [doc]]
            [clojure.tools.deps.alpha.repl :refer [add-libs]]
            [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.cli :as cli]
            [shadow.cljs.devtools.server :as server]
            [dotenv :refer [env]]))
(doc map)
;; (shadow/compile :dev)
;;(shadow/watch :dev)
(defn shadow-cljs-start!
  []
  (server/start!)
  )

(comment
  ;; quit cljs
  :cljs/quit
  ,)

(defn shadow-cljs-stop!
   []
   (server/stop!))

(shadow-cljs-start!)
