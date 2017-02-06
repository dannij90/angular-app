/**
 * Immediately invoked function expression
 * WebStorm names: iffy, iife, seaf
 */
(function () {
	'use strict';

	/**
	 * Angular Directive with most properties
	 * WebStorm names: ngdirective, ngcomponent
	 */

	/**
	 * tv Directive / Component
	 */
	angular
		.module('myApp')
		.directive('tvSchedule', tvScheduleComponent)
		.controller('TvScheduleCtrl', tvScheduleCtrl);

	/* @ngInject */
	function tvScheduleCtrl(tvFactory) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.schedule = [];
		vm.loading = false;

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {
			vm.loading = true;
			tvFactory.getTvSchedule().then(onSuccess, onError);

			function onSuccess(res){
				vm.loading = false;
				vm.schedule = res.data.results;

			}

			function onError(err){
				vm.loading = false;
				console.log("error");
			}

		}

	}

	/* @ngInject */
	function tvScheduleComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'tv/tv-schedule.template.html', // Path to the html template
			scope: { // Isolated scope

			},

			controller: 'TvScheduleCtrl', // Controller used for this directive
			controllerAs: 'vm', // ViewModel for controller
			bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content
		};

	}

})();