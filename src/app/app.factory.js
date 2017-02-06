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
	 * appFactory
	 */
	angular
		.module('myApp')
		.factory('appFactory', appFactory);

	/* @ngInject */
	function appFactory ($http) {
		var service = {
			getData: getData,
			save: save,
            getConcerts: getConcerts

		};

		return service;

		// Private functions
		// --------------------------------------------------
		function getData () {
	        return "Hello from factory";
		}

		function save () {

		}

		function getConcerts(){


		    return $http.get("https://apis.is/concerts");
        }
	}

})();