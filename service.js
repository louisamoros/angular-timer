'use strict';

angular
  .module('timer-angular', [])
    .service(
        "timer",
        function( $interval ) {

            // I provide a simple wrapper around the core $timeout that allows for
            // the timer to be easily reset.
            function Timer( invokeApply ) {
                //Store properties 
                this._invokeApply = ( invokeApply !== false );
                // I hold the $timeout promise. This will only be non-null when the
                // timer is actively counting down to callback invocation.
                this._timer = null;
                this._count = 0;
            }

            // Define the instance methods.
            Timer.prototype = {

                // Set constructor to help with instanceof operations.
                constructor: Timer,

                // I determine if the timer is currently counting down.
                isActive: function() {
                    return( !! this._timer );
                },


                // I reset the timer, then start the timer again.
                restart: function() {
                    this.reset();
                    this.start();
                },

                // I stop (if it is running) and put the counter to 0.
                reset: function() {
                    this.stop();
                    this._count = 0;
                },

                // I start the timer, which will invoke the callback upon timeout.
                start: function() {
                    var self = this;
                    // See $interval angular service documentation
                    this._timer = $interval(
                        function count() {
                            self._count++;
                        },
                        1000,
                        0,
                        this._invokeApply
                    );
                },

                // I stop the current timer, if it is running.
                stop: function() {
                    $interval.cancel( this._timer );
                    this._timer = false;
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