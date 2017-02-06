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
	 * concertsFactory
	 */
	angular
		.module('myApp')
		.factory('concertsFactory', concertsFactory);

	/* @ngInject */
	function concertsFactory ($http) {
		var service = {
            getConcerts: getConcerts

		};

		return service;

		// Private functions
		// --------------------------------------------------
		function getConcerts(){


		    return $http.get("https://apis.is/concerts");
        }
	}

})();