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
	function AppCtrl (appFactory) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = [];
		vm.concerts = [];


        vm.buttonClick = buttonClick;


		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {
		    console.log("Hello world");

		}

		function buttonClick () {
            console.log("button has been clicked");
            appFactory.getConcerts().then(dataSuccess, dataError);

            function dataSuccess(res){
            	vm.concerts = res.data.results;
            	console.log("data", data);
			}

			function dataError(data){
            	vm.errorMessage = "Could not fetch data";

			}
		}
	}

})();