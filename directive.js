'use strict';

angular
  .module('timer-angular', [])
    .directive('ngTimer', function () {
    return {
    	restrict: 'AEC',
    	scope: {
    		count: '=',
            format: '='
    	},
/*    	templateUrl: '../template/timer.html',*/
        template: '<div>this is a timer</div>',
    	link: function(scope, element, attrs, controller) {
    		console.log('hello');
            console.log(scope)
    	}
    }
});