(function () {
    angular.module('diceCalc').factory('calculatorFactory', calculatorFactory);

    function calculatorFactory() {
        var service = {
            doRollAverageDamageCalculation: doRollAverageDamageCalculation
        }

        return service;

        function doRollAverageDamageCalculation(
            attacks,
            toHit,
            strength,
            toughness,
            armourSave,
            armourPen,
            damage
        ) {
            var hits = attacks * ((7 - toHit) / 6);

            switch (true) {
                case strength > toughness:
                    var toWound = 3;
                    break;
                case strength == toughness:
                    var toWound = 4;
                    break;
                case strength < toughness:
                    var toWound = 5;
                    break;
            }

            var wounds = hits * ((7 - toWound) / 6)

            //TODO: Fix the math here.
            var modifiedSave = armourSave + armourPen;
            if(modifiedSave <= 1)
            {
                modifiedSave = 2;
            }
            else if(modifiedSave >= 7)
            {
                modifiedSave = 0;
            }

            var unsavedWounds = wounds * (1 - ((7 - modifiedSave) / 6));

            var damageAverage = unsavedWounds * damage;

            return damageAverage;
        }
    }
}());