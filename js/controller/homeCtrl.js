angular
  .module('app') //Extends App
  .controller('homeCtrl', ['$scope', function($scope) {
	
	$scope.menu = { //JSON objekt med menuen. "label" er den udtrykte tekst for menupunktet, "url" korresponderer med med "app.js" routen til undersiden uden ledende "/" og "keywords" er de nøgleord som søgefunktionen associerer med dette punkt.

		vechicleDamage : {
			label: "Køretøj skade",
			url: "vehicle-damage",
			category : ["tool"],
			keywords : ['car','bil','køretøj','vehicle','skade','damage']
		},
		infoEdge : {
			label: "Edge",
			url: "info-edge",
			category : ["info"],
			keywords : ['edge','held','luck','point','spent','regain','burn']
		},
		weaponRange : {
			label: "Våben rækkevidde",
			url: "weaponRange",
			category : ["info","tool"],
			keywords : ["weapon","range","våben","rækkevidde"]
		},
		healing : {
			label: "Healing",
			url: "healing",
			category : ["info"],
			keywords : ["houserule","healing","helbredelse","rekreation"]
		}
	};
	//Standard values
	$scope.categories = {'info' : true, 'tool' : true}; // Søg på kategorien
		
	$scope.sortMenu = function(query)
	{
		if(typeof(query) !== "string")
		{ query = ""; }
		
		var warr = [],	//work array
		rarr = [];	//return array
		
		query = query.split(" ")

		for(var m in $scope.menu) // each keyword
		{
			var keys = $scope.menu[m].keywords;
			var obj = {menu : $scope.menu[m], index : 0};
			for(var i in query) // each search word
			{
				var q = query[i].toLowerCase()
				for(var z in keys)
				{
					var k = keys[z].toLowerCase();
					if(q==k)
					{ obj.index++; }
					if(k.lastIndexOf(q) >= 0)
					{ obj.index++; }
				}
			}
			var categoryEnabled = false;
			for(var i in obj.menu.category)
			{
				var c = obj.menu.category[i];
				if($scope.categories[c] != false)
				{ categoryEnabled = true; }
			}
			if(categoryEnabled == true)
			{ warr.push(obj); }
		}

		function returner(warr,rarr)
		{
			var best = { index : -1}
			var latest = -1;
			for(var i in warr)
			{
				if(warr[i].index > best.index)
				{
					best = warr[i];
					latest = i;
				}
			}
			best['menu']['index'] = best['index'];
			best = best['menu'];
			
			rarr.push(best);
			warr.splice([latest],1);
			
			if(warr.length > 0)
			{ rarr = returner(warr,rarr); }
			
			return rarr;
		}
		rarr = returner(warr,rarr);
		
		return rarr;
	}

  }]);