angular
  .module('app') //Extends App
  .controller('weaponRangeCtrl', ['$scope', function($scope) {
	
	$scope.str = 0;
	$scope.weapons = [];
	
	$scope.categories = ["Pistol","Automatic", "Longarms","Heavy Weapons","Ballistic Projectiles","Impact Projectiles","Thrown Grenades"]; // categories
	
	$scope.w = function(category,name,short,medium,long,extreme)
	{
		
		if(isNaN($scope.str) || $scope.str <=0){}
		else
		{
			var arr = [short,medium,long,extreme];
			for(var i in arr)
			{
				arr[i] = arr[i].split("-");
				for(var s in arr[i])
				{
					if(arr[i][s].toLowerCase().lastIndexOf("str") != -1)
					{
						arr[i][s]=arr[i][s].toLowerCase().replace("str",$scope.str);
						if(arr[i][s].toLowerCase().lastIndexOf("*") != -1)
						{
							arr[i][s]=arr[i][s].split("*");
							arr[i][s] = arr[i][s][0] * arr[i][s][1];
						}
					}
				}
				arr[i] = arr[i][0]+"-"+arr[i][1];
				
				if(i==0){short = arr[i]}
				if(i==1){medium = arr[i]}
				if(i==2){long = arr[i]}
				if(i==3){extreme = arr[i]}
			}
		}
		var obj = {
			category : category,
			name : name,
			short : short,
			medium : medium,
			long : long,
			extreme : extreme
		}
		
		return obj;
	}
	$scope.reloadWeapons = function()
	{
		$scope.weapons = [];
		$scope.weapons.push(
			$scope.w($scope.categories[0],"Taser","0-5","6-10","11-15","16-20")
			,$scope.w($scope.categories[0],"Hold-out Pistol","0-5","6-15","16-30","31-50")
			,$scope.w($scope.categories[0],"Light Pistol","0-5","6-15","16-30","31-50")
			,$scope.w($scope.categories[0],"Heavy Pistol","0-5","6-20","21-40","41-60")
			
			,$scope.w($scope.categories[1],"Machine Pistol","0-5","6-15","16-30","31-50")
			,$scope.w($scope.categories[1],"SMG","0-10","11-40","41-80","81-150")
			,$scope.w($scope.categories[1],"Assualt Rifle","0-50","51-150","151-350","351-550")
			
			,$scope.w($scope.categories[2],"Shotgun (flechette)","0-10","11-25","26-40","41-60")
			,$scope.w($scope.categories[2],"Shotgun (slug)","0-10","11-40","41-80","81-150")
			,$scope.w($scope.categories[2],"Sporting Rifle","0-100","101-250","251-500","501-750")
			,$scope.w($scope.categories[2],"Sniper Rifle","0-150","151-350","351-800","801-1500")
			
			,$scope.w($scope.categories[3],"Light Machine Guns","0-75","76-200","201-400","401-800")
			,$scope.w($scope.categories[3],"Medium/Heavy Machine Guns","0-80","81-250","251-750","751-1200")
			,$scope.w($scope.categories[3],"Assualt Gun","0-100","101-300","301-750","751-1500")
			,$scope.w($scope.categories[3],"Grenade Launcher","*5-50","51-100","101-150","151-500")
			,$scope.w($scope.categories[3],"Missile Launcher","*20-70","71-150","151-450","451-1500")
			
			,$scope.w($scope.categories[4],"Bow","0-STR","STR-STR*10","STR*10-STR*30","STR*30-STR*60")
			,$scope.w($scope.categories[4],"Light Crossbow","0-6","7-24","25-60","61-120")
			,$scope.w($scope.categories[4],"Medium Crossbow","0-9","10-36","37-90","91-150")
			,$scope.w($scope.categories[4],"Heavy Crossbow","0-15","16-45","46-120","121-180")
			
			,$scope.w($scope.categories[5],"Thrown Knife","0-STR","STR-STR*2","STR*2-STR*3","STR*3-STR*5")
			,$scope.w($scope.categories[5],"Shuriken","0-STR","STR-STR*2","STR*2-STR*5","STR*5-STR*7")
			
			,$scope.w($scope.categories[6],"Standard","0-STR*2","STR*2-STR*4","STR*4-STR*6","STR*6-STR*10")
			,$scope.w($scope.categories[6],"Aerodynamic","0-STR*2","STR*2-STR*4","STR*4-STR*8","STR*8-STR*15")
		);
	}
	
	$scope.reloadWeapons();
  }]);