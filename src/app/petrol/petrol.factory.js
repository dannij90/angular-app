/**
 * Immediately invoked function expression
 * WebStorm names: iffy, iife, seaf
 */
(function () {
	'use strict';

	/**
	 * Angular Factory using Revealing Module Pattern
	 * WebStorm name: ngfactory
	 */

	/**
	 * petrolFactory
	 */
	angular
		.module('myApp')
		.factory('petrolFactory', petrolFactory);

	/* @ngInject */
	function petrolFactory ($http) {
		var service = {
			getPetrol: getPetrol
		};

		return service;

		// Private functions
		// --------------------------------------------------
		function getPetrol () {
			return $http.get("http://apis.is/petrol")
		}


	}


})();