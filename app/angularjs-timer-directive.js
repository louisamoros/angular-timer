//'use strict';

angular
.module('angularjs-timer-directive', [])
.directive(
  'ngTimer',
  function () {
    return {
      restrict: 'AEC',
      scope: {
        count: '=',
        format: '='
      },
      template: '<h3>{{count}}</h3>',
      link: function(scope, element, attrs, controller) {

      }
    };
  }
);
