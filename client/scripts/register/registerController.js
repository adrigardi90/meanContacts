angular.module('mean-app').controller('registerController',['$scope','MainService','$state', function($scope,MainService,$state){

	init = function(){
		$scope.user={};
		
	}

	$scope.register = function(user){
		//user.contacts = [];
		console.log(user);

		MainService.newUser(user).then(function success(data){
			console.log("Success");
			$state.go('Home.Main.Menu');

		}, function error(err){
			console.log("Error");
		});
	}

}]);