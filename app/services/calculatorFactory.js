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

            //Figure out the toWound value
            switch (true) {
                case strength >= (toughness * 2):
                    var toWound = 2;
                    break;
                case strength > toughness:
                    var toWound = 3;
                    break;
                case strength == toughness:
                    var toWound = 4;
                    break;
                case strength < toughness:
                    var toWound = 5;
                    break;
                case strength <= toughness / 2  :
                    var toWound = 6;
                    break;    
            }

            var wounds = hits * ((7 - toWound) / 6)

            //Calculate the actual save
            var modifiedSave = parseInt(armourSave) + parseInt(armourPen);
            if(modifiedSave <= 1)
            {
                modifiedSave = 2;
            }
            else if(modifiedSave >= 7)
            {
                modifiedSave = 0;
            }

            //Bypass for when no save is allowed.
            if(modifiedSave == 0)
            {
                var unsavedWounds = wounds; // The save is 0 or the AP of the attack is too high to allow an armour save.
            }
            else
            {
                var unsavedWounds = wounds * (1 - ((7 - modifiedSave) / 6));
            }

            var damageAverage = unsavedWounds * damage;

            return damageAverage;
        }
    }
}());