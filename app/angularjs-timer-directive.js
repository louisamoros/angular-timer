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
        format: '=',
        type: '='
      },
      template:'<div ng-include="getContentUrl()"></div>',
      link: function(scope, element, attrs, controller) {
        scope.getContentUrl = function () {
          if( typeof scope.type === 'undefined' ) {
            return 'app/template/timer-classic.html';
          } else {
            return 'app/template/timer-' + scope.type + '.html';
          }
        };
      }
    };
  }
);
