angular
  .module('app') //Extends App
  .controller('charisma-linkedOpposedTestsCtrl', ['$scope', function($scope) {
	
	$scope.checks = [
		{
			"skill" : "Con",
			"ac" : "Con + Charisma",
			"tc" : "(Con or Negotiation) + Charisma",
		},
		{
			"skill" : "Etiquette",
			"ac" : "Etiquette + Charisma",
			"tc" : "Perception + Charisma",
		},
		{
			"skill" : "Intimidation",
			"ac" : "Intimidation + Charisma",
			"tc" : "Intimidation + Willpower",
		},
		{
			"skill" : "Leadership",
			"ac" : "Leadership + Charisma",
			"tc" : "Leadership + Willpower",
		},
		{
			"skill" : "Negotiation",
			"ac" : "Negotiation + Charisma",
			"tc" : "Negotiation + Charisma",
		},
	]
	
  }]);