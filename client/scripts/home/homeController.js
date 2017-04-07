angular.module('mean-app')
	.controller('homeController',['$state', '$scope','$rootScope','$window','MainService',
		function($state, $scope,$rootScope,$window,MainService){

	$scope.name = $window.sessionStorage.getItem('completeName');

	$scope.logout = function(){
		MainService.logout().then(function success(data){
			$window.sessionStorage.removeItem('completeName');
			$window.sessionStorage.removeItem('id');
			$state.go('login');
		}, function error(err){
			console.log("error");
		});
	}
}]);
