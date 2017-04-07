angular.module('mean-app')
	.controller('contactController', ['$scope','MainService','$window', 
		function($scope,MainService,$window){

	$scope.create = function(contact){
		var id = $window.sessionStorage.getItem('id');
		MainService.addContact(id, contact).then(function success(data){
			console.log(data)
		}, function error(err){
			console.log(err)
		});
	}
}]);