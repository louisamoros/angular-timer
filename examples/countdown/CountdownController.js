'use strict';

/**
* # MainController
* Controller of the angularApp
*/
angular.module('angularjsTimerExample')
  .controller('CountdownController', function ($scope, timer) {

    $scope.countdown = new timer( 60, true);

    $scope.onStartCountdown = function() {
    	$scope.countdown.start();
    }

    $scope.onStopCountdown = function() {
    	$scope.countdown.stop();
    }

    $scope.onResetCountdown = function() {
    	$scope.countdown.reset();
    }

    $scope.onRestartCountdown = function() {
    	$scope.countdown.restart();
    }

  });
