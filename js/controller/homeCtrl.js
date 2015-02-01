angular
  .module('app') //Extends App
  .controller('homeCtrl', ['$scope', function($scope) {
	 
	$scope.menu = { //JSON objekt med menuen. "label" er den udtrykte tekst for menupunktet, "url" korresponderer med med "app.js" routen til undersiden uden ledende "/" og "keywords" er de nøgleord som søgefunktionen associerer med dette punkt.
			home : {
				label: "Forside",
				url: "",
				keywords : ['home','search','index','forside']
			},
			vechicleDamage : {
				label: "Køretøj skade",
				url: "vehicle-damage",
				keywords : ['car','bil','køretøj','vehicle','skade','damage']
			}
		};
	$scope.arrToStr = function(arr) //Omdanner et array til en string så man let kan søge på indhold
	{
		var str = "";
		for(var i in arr)
		{
			str+=arr[i]+" ";
		}
		return str;
	}

  }]);