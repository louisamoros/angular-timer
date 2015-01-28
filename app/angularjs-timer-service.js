//'use strict';

angular
.module('angularjs-timer-service', [])
.service(
  'timer',
  function( $interval ) {

    function Timer( count, running, countdown ) {
      //Store properties
      this._count = ( count || 0 );
      this._running = ( running !== false );
      this._countdown = ( countdown !== false );
      console.log('timer this inside service');
      console.log(this);
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
          // If not countdown
          if ( !this._countdown ) {
            this._timer = $interval(
              function count() {
                self._count++;
              },
              1,
              0
            );
          } else {
            this._timer = $interval(
              function count() {
                self._count--;
              },
              1,
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
    function timerFactory( count, running, countdown ) {
      return( new Timer( count, running, countdown ) );
    }

    // Store the actual constructor as a factory property so that it is still
    // accessible if anyone wants to use it directly.
    timerFactory.Timer = Timer;

    // Return the factory.
    return( timerFactory );

  }
);
