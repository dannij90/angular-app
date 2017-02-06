/**
 * Immediately invoked function expression
 * WebStorm names: iffy, iife, seaf
 */
(function () {
	'use strict';

/**
 * Angular module
 * WebStorm names: ngmodule
 * Recommended naming conventions:
 * moduleName = lowercase,
 */

/**
 * myApp module
 */
angular
	.module('myApp', [])
	.config(Config);

	// Config
	// --------------------------------------------------
	/* @ngInject */
	function Config () {

	}

})();