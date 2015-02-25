angular
.module('app')
.controller('encounterCtrl', ['$scope',  function($scope)
{

	$scope.zone = {value:0,name:"C"};
	$scope.result = 0;
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
	$scope.roll = function()
	{
		$scope.output = false;
		var result1 ={
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0
		},
		result2 ={
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0
		},
		eyes = 0,
		success = 0,
		glitch = false;
		
		for(var i = 0;i<$scope.result;i++)
		{
			var x = Math.round(Math.random() * 5) + 1;
			result1[x]++;
			if(x >4)
			{success++;}
		}
		
		for(var i = 0;i<5;i++)
		{
			var x = Math.round(Math.random() * 5) + 1;
			result2[x]++;
			eyes+=x;
		}
		if((result2[1]+result2[2]) > 2 && (result2[5]+result2[6]) < 1)
		{
			glitch = true;
		}
		$scope.output = {
			die : $scope.result+0,
			full : true,
			success:success,
			glitch:glitch,
			resultone:result1,
			resulttwo:result2,
			eyes : eyes
		};
	}
	$scope.output = {
		full : false
		};
}]);