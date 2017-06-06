angular.module('mean-app')
	.controller('contactController', ['$state','$scope','MainService','$window', 
		function($state,$scope,MainService,$window){

	$scope.create = function(contact){
		var id = $window.sessionStorage.getItem('id');
		MainService.addContact(id, contact).then(function success(data){
			console.log(data);
			$state.go('login');
		}, function error(err){
			console.log(err)
		});
	}
}]);