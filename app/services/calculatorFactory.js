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
            //Calc Hits from Attacks
            var hits = attacks * ((7 - toHit) / 6);

            //Figure out the toWound value
            switch (true) 
            {
                case strength == toughness: //Most Common, Strength and Toughness equal
                    var toWound = 4;
                    break;
                case strength >= (toughness * 2) : //Strength is Double or Greater than Toughness
                    var toWound = 2;
                    break;
                case strength <= toughness / 2  : //Strength is Half or Less than Half Toughness
                    var toWound = 6;
                    break;   
                case strength > toughness : //Strength is greater than Toughness 
                    var toWound = 3;
                    break;
                case strength < toughness : //Strength is less than Toughness
                    var toWound = 5;
                    break;
            }

            //Calc Wounds from Hits
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

            //Calc Damage from Unsaved Wounds
            var damageAverage = unsavedWounds * damage;

            return damageAverage;
        }
    }
}());