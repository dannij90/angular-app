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
	 * concertIndex Directive / Component
	 */
	angular
		.module('myApp')
		.directive('tvHome', tvHomeComponent)
		.controller('TvHomeCtrl', TvHomeCtrl);

	/* @ngInject */
	function TvHomeCtrl ($rootScope) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = [];
		vm.someFunction = someFunction;

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {
			$rootScope.$emit('selectedPage', 'tv')
		}

		function someFunction () {

		}
	}

	/* @ngInject */
	function tvHomeComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'tv/tv-home.template.html', // Path to the html template
			scope: { // Isolated scope

			},
			//require: '^outerDirectiveName', // If this directive requires another directive
			controller: 'TvHomeCtrl', // Controller used for this directive
			controllerAs: 'vm', // ViewModel for controller
			bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content
		};


	}

})();