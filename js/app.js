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
  }])
  
masterApp.query = "";