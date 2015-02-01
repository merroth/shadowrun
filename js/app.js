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
  }])