(function () {
    angular.module('diceCalc').service('unitProfileService', unitProfileService);

    function unitProfileService() {
        var service = {
            getAttackerProfiles: getAttackerProfiles,
            getDefenderProfiles: getDefenderProfiles
        }

        return service;

        function getAttackerProfiles()
        {
            return {};
        }

        function getDefenderProfiles()
        {
            return {};
        }
    }
})