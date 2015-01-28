'use strict';

/**
* # angularApp
*
* Main module of the application.
*/
angular
.module('angularjsTimerExample', [
'ngRoute',
'angularjs-timer-service',
'angularjs-timer-directive'
]).
config(['$routeProvider',function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "examples/timer/timer.html",
    controller: "TimerController"
  });
  $routeProvider.when("/timers", {
    templateUrl: "examples/timers/timers.html",
    controller: "TimersController"
  });    $routeProvider.when("/countdown", {
    templateUrl: "examples/countdown/countdown.html",
    controller: "CountdownController"
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}])
