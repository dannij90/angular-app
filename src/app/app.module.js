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
	.module('myApp', [
		'ui.router'
	])
	.config(Config);

	// Config
	// --------------------------------------------------
	/* @ngInject */
	function Config ($stateProvider) {

	    // Define all ui-router states (URLs)
	    var homeState = {
            name: 'home',
            url: '/',
            template: '<app-home></app-home>'
        };

        var tvState = {
            name: 'tv',
            url: '/tv',
            template: '<tv-home></tv-home>'
        };

        var concertsState = {
            name: 'concerts',
            url: '/concerts',
            template: '<concerts-home></concerts-home>'
        };

        var petrolState = {
            name: 'petrol',
            url: '/petrol',
            template: '<petrol-home></petrol-home>'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(concertsState);
        $stateProvider.state(tvState);
        $stateProvider.state(petrolState);
	}

})();