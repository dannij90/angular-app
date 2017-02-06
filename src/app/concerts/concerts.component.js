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
	 * concerts Directive / Component
	 */
	angular
		.module('myApp')
		.directive('concerts', concertsComponent)
        .controller('concertsCtrl', concertsCtrl);


	/* @ngInject */
	function concertsCtrl () {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.concertsData = [];
		vm.someFunction = someFunction;

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {

		}

		function someFunction () {

		}
	}

	/* @ngInject */
	function concertsComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'concerts/concerts.template.html', // Path to the html template
			scope: { // Isolated scope
				concertsData: '=', // Two way data-binding property
			},
			//require: '^outerDirectiveName', // If this directive requires another directive
			controller: 'concertsCtrl', // Controller used for this directive
			controllerAs: 'vm', // ViewModel for controller
			bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content
		};
	}

})();