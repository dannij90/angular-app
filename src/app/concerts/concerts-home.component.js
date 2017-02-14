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
		.directive('concertsHome', concertsHomeComponent)
		.controller('ConcertsHomeCtrl', ConcertsHomeCtrl);

		/* @ngInject */
		function ConcertsHomeCtrl (concertsFactory, $rootScope) {
			// "Controller as" the ViewModel
			var vm = this;

			// Public ViewModel
			// --------------------------------------------------
			vm.data = [];
            vm.concerts = [];
            vm.loading = false;

			// Run
			// --------------------------------------------------
			activate();

			// Private functions
			// --------------------------------------------------
			function activate () {
                $rootScope.$emit('selectedPage', 'concerts')
				getConcertsData();
			}

            function getConcertsData () {
                vm.loading = true;
                console.log("button has been clicked");
                concertsFactory.getConcerts().then(dataSuccess, dataError);

                function dataSuccess(res){
                    vm.concerts = res.data.results;
                    vm.loading = false;
                }

                function dataError(data){
                    vm.errorMessage = "Could not fetch data";
                    vm.loading = false;

                }
            }
		}

	/* @ngInject */
	function concertsHomeComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'concerts/concerts-home.template.html', // Path to the html template
			scope: { // Isolated scope

			},
			//require: '^outerDirectiveName', // If this directive requires another directive
			controller: 'ConcertsHomeCtrl', // Controller used for this directive
			controllerAs: 'vm', // ViewModel for controller
			 bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content
		};


	}

})();