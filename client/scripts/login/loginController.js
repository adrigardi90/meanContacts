angular.module('mean-app')
	.controller('loginController',['$state','$scope','MainService','$rootScope','$window', 
		function($state, $scope,MainService,$rootScope,$window){

	function init(){
		$scope.error = false;
		$scope.message = '';
	}

	//Login function
	$scope.login = function(user){
		init();
		MainService.login(user).then(function success(data){
			//Save data in session storage
			$window.sessionStorage.setItem('completeName',data.data.name + ' ' + data.data.surname)
			$window.sessionStorage.setItem('id',data.data.id)
			$state.go('Home.Main.Menu');
		}, function error(err){
			$scope.error = true;
			$scope.message = err.data.message;
		});
	}

}]);