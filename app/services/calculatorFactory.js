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

            var unsavedWounds = wounds * ((7 - (armourSave - armourPen)) / 6);

            var damageAverage = unsavedWounds * damage;

            return damageAverage;
        }
    }
}());