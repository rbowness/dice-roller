(function() {
    
    var app = angular.module('diceCalc', ['ngRoute']);
	
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/calculator',
			{
				controller: 'CalculatorController',
				templateUrl: 'app/views/calculator.html'
			})
			/*.when('/simulator',
			{
				controller: 'SimulatorController',
				templateUrl: 'app/views/simulator.html'
			})*/
			.otherwise( { redirectTo: '/calculator' } );
	});
    
}());