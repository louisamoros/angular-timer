'use strict';

/**
* # MainController
* Controller of the angularApp
*/
angular.module('angularjsTimerExample')
  .controller('MainController', function ($scope, timer) {

    $scope.timer = new timer();
    $scope.timer2 = new timer();

    $scope.onStartTimer = function() {
    	$scope.timer.start();
    }

    $scope.onStopTimer = function() {
    	$scope.timer.stop();
    }

    $scope.onResetTimer = function() {
    	$scope.timer.reset();
    }

    $scope.onRestartTimer = function() {
    	$scope.timer2.restart();
    }

    $scope.onStartTimer2 = function() {
      $scope.timer2.start();
    }

    $scope.onStopTimer2 = function() {
      $scope.timer2.stop();
    }

    $scope.onResetTimer2 = function() {
      $scope.timer2.reset();
    }

    $scope.onRestartTimer2 = function() {
      $scope.timer2.restart();
    }

  });
