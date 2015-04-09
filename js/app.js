var masterApp=angular
  .module('app', [
    'ui.router',
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
      })
      .state('vehicle-damage', {
        url: '/vehicle-damage',
        templateUrl: 'view/vehicleDamage.html',
        controller: 'vehicleDamageCtrl'
      })
      .state('info-edge', {
        url: '/info-edge',
        templateUrl: 'view/info-edge.html',
        controller: 'info-edgeCtrl'
      })
      .state('weaponRange', {
        url: '/weaponRange',
        templateUrl: 'view/weaponRange.html',
        controller: 'weaponRangeCtrl'
      })
      .state('healing', {
        url: '/healing',
        templateUrl: 'view/healing.html',
        controller: 'healingCtrl'
      })
      .state('encounter', {
        url: '/encounter',
        templateUrl: 'view/encounter.html',
        controller: 'encounterCtrl'
      })
      .state('charisma-linkedOpposedTests', {
        url: '/charisma-linkedOpposedTests',
        templateUrl: 'view/charisma-linkedOpposedTests.html',
        controller: 'charisma-linkedOpposedTestsCtrl'
      })
  }])
  
masterApp.query = "";

masterApp.dieroller = function(cast)
{
	if(typeof(cast) == "undefined"){ cast = 1; }
	var r ={
		result : {
			1 : 0,
			2 : 0,
			3 : 0,
			4 : 0,
			5 : 0,
			6 : 0
		},
		eyes : 0,
		success : 0,
		glitch : false,
		critGlitch : false
	}
	
	for(var i = 0;i<cast;i++)
	{
		var x = Math.round(Math.random() * 5) + 1;
		r.result[x]++;
		r.eyes+=x;
		if(x >4)
		{r.success++;}
	}
	if((r.result[2] + r.result[1]) > 0 && (r.result[5] + r.result[6]) < Math.round(cast / 2))
	{
		r.glitch = true;
		if((r.result[2] + r.result[1]) >= Math.round(cast / 2) && (r.result[5] + r.result[6]) == 0)
		{
			r.critGlitch = true;
		}
	}
	return r;
}