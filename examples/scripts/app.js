'use strict';

/**
 * # angularApp
 *
 * Main module of the application.
 */
 angular
 .module('angularApp', [
    'ngRoute',
    'angularjs-timer-service',
    'angularjs-timer-directive'
    ]).
 config(['$routeProvider',function($routeProvider) {
    $routeProvider.when("/examples", {
       templateUrl: "examples/views/examples.html",
       controller: "ExamplesController"
    });
    $routeProvider.when("/home", {
       templateUrl: "examples/views/main.html",
       controller: "MainController"
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}])
