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
	function appFactory () {
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
		    var concerts = [{
                "eventDateName": "Tónleikar - Gestur frá gamla landinu",
                "name": "Tónleikar - Gestur frá gamla landinu",
                "dateOfShow": "2017-02-11T14:00:00",
                "userGroupName": "Hannesarholt ses",
                "eventHallName": "Hljóðberg (Hannesarholt)",
                "imageSource": "https://d30qys758zh01z.cloudfront.net/images/medium/1.9935.jpg"
            },
                {
                    "eventDateName": "Papar í Hlégarði",
                    "name": "Tónleikar",
                    "dateOfShow": "2017-02-11T23:59:00",
                    "userGroupName": "prime ehf",
                    "eventHallName": "Hlégarður",
                    "imageSource": "https://d30qys758zh01z.cloudfront.net/images/medium/1.9938.jpg"
                }];

		    return concerts;
        }
	}

})();