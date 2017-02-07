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
		.directive('petrolHome', petrolHomeComponent);

	/* @ngInject */
	function petrolHomeComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'petrol/petrol-home.template.html', // Path to the html template
			scope: { // Isolated scope

			},
			//require: '^outerDirectiveName', // If this directive requires another directive
			//controller: 'ControllerName', // Controller used for this directive
			//controllerAs: 'vm', // ViewModel for controller
			// bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content
		};


	}

})();