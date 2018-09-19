(function () {
	angular.module('diceCalc').controller('CalculatorController', CalculatorController);

	CalculatorController.$inject = ['$scope', 'calculatorFactory'];

	function CalculatorController($scope, calculatorFactory) {

		var controller = this;

		//Attacker Stats
		controller.attacks = 15;
		controller.toHit = 3;
		controller.strength = 5;
		controller.armourPen = 1;
		controller.damage = 1;

		//Defender Stats
		controller.toughness = 4;
		controller.armourSave = 3;

		function init() {
			calculateResults();
		}

		init();

		//Results
		controller.woundsDealt = 0;
		//controller.damageDealt = 0;

		controller.calculateResults = calculateResults;

		function calculateResults() {
			controller.damageDealt = calculatorFactory.doRollAverageDamageCalculation(
				controller.attacks,
				controller.toHit,
				controller.strength,
				controller.toughness,
				controller.armourSave,
				controller.armourPen,
				controller.damage
			);
		}
	}

}());
