/**
 * angularjs-timer - v0.0.0 - 2015-01-18 5:23 PM
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
        count: '=',
        format: '='
      },
      template: '<h3>{{count}}</h3>',
      link: function(scope, element, attrs, controller) {

      }
    };
  }
);

//'use strict';

angular
.module('angularjs-timer-service', [])
.service(
  'timer',
  function( $interval ) {

    // Provide a simple wrapper around the core $timeout that allows for
    // the timer to be easily reset.
    function Timer( invokeApply ) {
      //Store properties
      this._count = 0;
      this._running = false;
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
        this._count = 0;
      },

      // Start the timer.
      start: function() {
        var self = this;
        // See $interval angular service documentation
        if ( !this._running ) {
          this._timer = $interval(
            function count() {
              self._count++;
            },
            1,
            0
          );
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
    function timerFactory( invokeApply ) {
      return( new Timer( invokeApply ) );
    }

    // Store the actual constructor as a factory property so that it is still
    // accessible if anyone wants to use it directly.
    timerFactory.Timer = Timer;

    // Return the factory.
    return( timerFactory );

  }
);
