'use strict';

angular
  .module('timer-angular', [])
    .directive('timer', function () {
    return {
    	restrict: 'E',
    	scope: {
    		shape: '='
    	},
    	/*templateUrl: 'template/timer.html',*/
        template: '<div>this is a timer</div>',
    	link: function(scope, element, attrs, controller) {
    		console.log('test');
    	}
    }
});