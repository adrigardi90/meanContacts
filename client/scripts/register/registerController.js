angular.module('mean-app')
	.controller('registerController',['$scope','MainService','$state', 
		function($scope,MainService,$state){

	$scope.register = function(user){
		MainService.newUser(user).then(function success(data){
			$state.go('Home.Main.Menu');
		}, function error(err){
			console.log("Error");
		});
	}

}]);