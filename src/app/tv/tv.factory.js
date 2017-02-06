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
	 * tvFactoryFactory
	 */
	angular
		.module('myApp')
		.factory('tvFactory', tvFactory);

	/* @ngInject */
	function tvFactory ($http) {
		var service = {
			getTvSchedule: getTvSchedule
		};

		return service;

		// Private functions
		// --------------------------------------------------
		function getTvSchedule () {
		    return $http.get("http://apis.is/tv/ruv");

		}

	}

})();