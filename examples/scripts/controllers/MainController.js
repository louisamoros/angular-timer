'use strict';

/**
* # MainController
* Controller of the angularApp
*/
angular.module('angularApp')
  .controller('MainController', function ($scope, timer) {

    $scope.timer = new timer();

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
    	$scope.timer.restart();
    }
  });
