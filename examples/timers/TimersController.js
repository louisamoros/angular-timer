'use strict';

/**
* # MainController
* Controller of the angularApp
*/
angular.module('angularjsTimerExample')
  .controller('TimersController', function ($scope, timer) {

    $scope.timer1 = new timer();
    $scope.timer2 = new timer();

    $scope.onStartTimer1 = function() {
    	$scope.timer1.start();
    }

    $scope.onStopTimer1 = function() {
    	$scope.timer1.stop();
    }

    $scope.onResetTimer1 = function() {
    	$scope.timer1.reset();
    }

    $scope.onRestartTimer1 = function() {
    	$scope.timer1.restart();
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
