'use strict';

/**
* # MainController
* Controller of the angularApp
*/
angular.module('angularjsTimerExample')
  .controller('CountdownController', function ($scope, timer) {

    $scope.countdown = new timer();

    $scope.onStartCountdown = function() {
    	$scope.countdown.start();
    }

    $scope.onStopCoundown = function() {
    	$scope.countdown.stop();
    }

    $scope.onResetCountdown = function() {
    	$scope.countdown.reset();
    }

    $scope.onRestartCountdown = function() {
    	$scope.countdown.restart();
    }

  });
