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
)
.filter(
  'readableTime',
  function() {
    var day, format, hour, minute, month, week, year;
    return function ( seconds ) {
      seconds = parseInt(seconds, 10);
      minute = 60;
      hour = minute * 60;
      day = hour * 24;
      week = day * 7;
      year = day * 365;
      month = year / 12;
      // format = function(number, string) {
      //   string = number === 1 ? string : "" + string + "";
      //   return "" + number + "" + string;
      // };
      switch (false) {
        case (seconds >= minute):
          return seconds + '\'';
          case (seconds >= hour):
            return Math.floor(seconds / minute) + '"';
            case (seconds >= day):
              return Math.floor(seconds / hour) + 'h';
              case (seconds >= week):
                return Math.floor(seconds / day) + 'd';
                case (seconds >= month):
                  return Math.floor(seconds / week) + 'w';
                  case (seconds >= year):
                    return Math.floor(seconds / month) + 'mth';
                    default:
                      return Math.floor(seconds / year) + 'year';
                    }
                  };
                }
              );
