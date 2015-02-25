angular
.module('app')
.controller('encounterCtrl', ['$scope',  function($scope)
{

	$scope.zone = {value:0,name:"C"};
	$scope.zones=[
		{name:"AAA",value:8},
		{name:"AA",value:6},
		{name:"A",value:4},
		{name:"B",value:2},
		{name:"C",value:0},
		{name:"D",value:-1},
		{name:"E",value:-2},
		{name:"Z",value:-4}
	]

}]);