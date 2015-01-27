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
       templateUrl: "examples/views/main.html",
       controller: "MainController"
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}])
