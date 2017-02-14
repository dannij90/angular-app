/**
 * Immediately invoked function expression
 * WebStorm names: iffy, iife, seaf
 */
(function () {
	'use strict';

	/**
	 * Angular Controller with a named function using controllerAs syntax
	 * WebStorm names: ngcontroller, ngctrl
	 * Recommended naming conventions:
	 * moduleName = lowercase,
	 * ControllerName = PascalCase
	 */

	/**
	 * App Controller
	 */
	angular
		.module('myApp')
		.controller('AppCtrl', AppCtrl);

	/* @ngInject */
	function AppCtrl (concertsFactory, $rootScope) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------

		vm.selectedPage = "home";
		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {
		    $rootScope.$on('selectedPage', function(e, value){
		    	vm.selectedPage = value;
			})

		}


	}

})();