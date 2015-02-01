angular
  .module('app')
  .controller('vehicleDamageCtrl', ['$scope',  function($scope) {
	
	$scope.run = function()
	{
		//Indsamler information fra dokumentet og opretter variabler
		var kmh = document.getElementById("kmh").value,			// Kilometer per timen
		bcar = document.getElementById("bcar").value,			// "body" værdi på bilen
		kms = (kmh * 1000) / 60 / 60,							// Meter per sekund
		kmt = kms * 3,											// Meter per tur
		mod = document.getElementById("mod"),					// DOM element der viser modifier for skaden
		dmg = document.getElementById("dmg"),					// DOM element der viser den samlede skade køretøjet modtager
		modlabel = "Modifier: ",								// Begyndelsen til modifier tekst beskeden
		damage = 0;
		
		document.getElementById("kms").value = Math.round(kms);	// Udskriver meter per sekund til DOM elementet
		document.getElementById("kmt").value = Math.round(kmt);	// Udskriver meter per tur til DOM elementet
			
		if(kmt <=20)											// Udregner modifier
		{
			modlabel += "<b>Body / 2</b>";
			damage = bcar / 2;
		}
		if(kmt >20 && kmt <=60) {
			modlabel += "<b>Body</b>";
			damage = bcar;
		};
		if(kmt >60 && kmt <= 200) {
			modlabel += "<b>Body * 2</b>";
			damage = bcar * 2;
		};
		if(kmt > 200) {
			modlabel += "<b>Body * 3</b>";
			damage = bcar * 3;
		};
		
		mod.innerHTML = modlabel;								// Udskriver modifier til DOM elementet
		dmg.value = damage;										// Udskriver skade til DOM elementet
	}
}]);