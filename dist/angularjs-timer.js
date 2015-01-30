/**
 * angularjs-timer - v0.0.0 - 2015-01-29 11:18 PM
 * https://github.com/louisamoros/angular-timer
 *
 * Copyright (c) 2015 Louis Amoros
 * Licensed MIT
 */
//'use strict';

angular
.module('angularjs-timer-directive', [])
.directive(
  'ngTimer',
  function () {
    return {
      restrict: 'AEC',
      scope: {
        timer: '=',
        format: '=',
        type: '@'
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

// 'use strict';

angular
.module('angularjs-timer-service', [])
.service(
  'timer',
  function( $interval ) {

    function Timer( offset, countdown ) {
      //Store properties
      this._offset = ( offset || 0 );
      this._count = this._offset;
      this._running = false;
      this._countdown = ( countdown !== false );
    }

    // Define the instance methods.
    Timer.prototype = {

      // Set constructor to help with instanceof operations.
      constructor: Timer,

      // Reset the timer, then start the timer again.
      restart: function() {
        this.reset();
        this.start();
      },

      // Stop (if it is running) and put the counter to 0.
      reset: function() {
        this.stop();
        this._count = this._offset;
      },

      // Start the timer.
      start: function() {
        var self = this;
        // See $interval angular service documentation
        if ( !this._running ) {
          // If not countdown
          if ( !this._countdown ) {
            this._timer = $interval(
              function count() {
                self._count++;
              },
              1000,
              0
            );
          } else {
            this._timer = $interval(
              function count() {
                self._count--;
              },
              1000,
              0
            );
          }
          this._running = true;
        }
      },

      // stop the current timer, if it is running.
      stop: function() {
        $interval.cancel( this._timer );
        this._running = false;
      },
    };


    // Create a factory that will call the constructor. This will simplify
    // the calling context.
    function timerFactory( offset, countdown ) {
      return( new Timer( offset, countdown ) );
    }

    // Store the actual constructor as a factory property so that it is still
    // accessible if anyone wants to use it directly.
    timerFactory.Timer = Timer;

    // Return the factory.
    return( timerFactory );

  }
);
