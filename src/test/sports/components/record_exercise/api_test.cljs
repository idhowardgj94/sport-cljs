(ns sports.components.record-exercise.api-test
  (:require [cljs.test :refer [use-fixtures deftest is testing]]
            [sports.components.record-exercise.api :refer [first-test add-exercise-record!]]))

(use-fixtures :once
  (fn [f]
    (with-redefs [sports.firebase.exercise/add-exercise! (fn [& args] true)
                  sports.state/store (atom {:auth? true
                                            :validate-msg nil
                                            :app nil
                                            :user (clj->js {:uid "test"})})]
      (f))))

(deftest first-test-test
  (testing "Given a value, should return that value"
    (is (= (first-test "test") "test"))))

;;   (r/atom {:auth? nil
;;           :validate-msg nil
;;           :app nil
;;           :user nil}))
;; (deftest add-exercise-record-test
;; (testing "Given a data, when call add-exercise-recrd!, it should call add-exercise! to store data in firestore"
;;   (is (= (add-exercise-record! "someData") true))))
