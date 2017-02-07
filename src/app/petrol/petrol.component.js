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
	 * petrol Directive / Component
	 */
	angular
		.module('myApp')
		.directive('petrol', petrolComponent)
		.controller('PetrolCtrl', PetrolCtrl);



	/* @ngInject */
	function PetrolCtrl (petrolFactory) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.petrolData = [];
		vm.loading = false;

		vm.showPetrol = showPetrol;
		vm.hidePetrol = hidePetrol;

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate () {

		}

		function showPetrol(){
			vm.loading = true;
			petrolFactory.getPetrol().then(onSuccess, onError);

			function onSuccess(res){
				vm.petrolData = res.data.results;
                vm.loading = false;
			}

			function onError(err){
				vm.loading = false;
				console.log("error");
			}
		}

		function hidePetrol(){
			vm.petrolData = [];
		}

	}


	
	/* @ngInject */
	function petrolComponent () {
		return {
			restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
			templateUrl: 'petrol/petrol.template.html', // Path to the html template
			scope: { // Isolated scope


			},
			controller: 'PetrolCtrl', // Controller used for this directive
			controllerAs: 'vm', // ViewModel for controller
			bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
			//replace: true, // Replace the HTML element on which the directive is attached
			//transclude: false, // Lets us wrap a directive around arbitrary content

		};

	}
	
})();