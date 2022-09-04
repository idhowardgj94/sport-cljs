(ns sports.components.record-exercise.util-test
  (:require [cljs.test :refer [use-fixtures deftest is testing]]
            [sports.components.record-exercise.util :as sut]))


;;(deftest first-test-test
;;  (testing "Given a value, should return that value"
;;    (is (= (first-test "test") "test"))))


(deftest get-date-format-test
  (testing "Given a js date of '2022/01/01', should return string of '2022-01-01'"
    (is (= (sut/get-date-format (js/Date. "2022/01/01")) "2022-01-01"))))

(deftest is-nan-test
  (testing "When parsing Nan, should return true"
    (is (= (sut/is-nan js/NaN) true))))

(deftest get-group-by-id-test
  (testing "given a group id, return it's exercises"
    (is (= (sut/get-group-by-id 1)
           {:id 1
            :name "leg"
            :exercises
            [{:id "front-squat"
              :name "front squat"}
             {:id "back-squat"
              :name "back squat" }
             {:id "leg-press"
              :name "leg press" }
             {:id "leg-curl"
              :name "leg curl"}
             {:id "calf-raise"
              :name "calf raise" }]}))))

(deftest get-exercises-by-group-id-test
  (testing "given a group id, will return exercises array"
    (is (= (sut/get-exercises-by-group-id 1)
           [{:id "front-squat"
             :name "front squat"}
            {:id "back-squat"
             :name "back squat" }
            {:id "leg-press"
             :name "leg press" }
            {:id "leg-curl"
             :name "leg curl"}
            {:id "calf-raise"
             :name "calf raise" }]))))
