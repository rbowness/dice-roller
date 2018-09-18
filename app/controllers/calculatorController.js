function CalculatorController() {
	
	var controller = this;

	//Attacker Stats
	controller.attacks = 1;
	controller.toHit = 3;
	controller.strength = 4;
	controller.armourPen = 0;
	controller.damage = 1;
	
	//Defender Stats
	controller.toughness = 4;
	controller.armourSave = 3;

	//Results
	controller.woundsDealt = 0;
	controller.damageDealt = 0;
}

angular.module('diceCalc').controller('CalculatorController', CalculatorController);