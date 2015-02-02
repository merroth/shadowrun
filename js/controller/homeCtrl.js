angular
  .module('app') //Extends App
  .controller('homeCtrl', ['$scope', function($scope) {
	  
	$scope.homeIs ="";
	 
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
			},
			infoEdge : {
				label: "Edge",
				url: "info-edge",
				keywords : ['edge','held','luck','point','spent','regain']
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
	$scope.sortMenu = function(query)
	{
		if(typeof(query) !== "string")
		{
			return $scope.menu;
		}
		
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
			warr.push(obj);
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
			rarr.push(best.menu);
			warr.splice([latest],1);
			
			if(warr.length > 0)
			{ rarr = returner(warr,rarr); }
			return rarr;
		}
		rarr = returner(warr,rarr);
		
		return rarr;
	}

  }]);