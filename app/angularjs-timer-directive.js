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
      template: '<div style="font-size:25px;">{{count}}</div>',
      link: function(scope, element, attrs, controller) {

      }
    };
  }
);
