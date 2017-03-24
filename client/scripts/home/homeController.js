angular.module('mean-app').controller('homeController',['$state', '$scope','$rootScope','$window','MainService',function($state, $scope,$rootScope,$window,MainService){

	//$scope.name = $rootScope.nameLogin;
	//$scope.surname = $rootScope.surnameLogin;
	$scope.name = $window.sessionStorage.getItem('completeName');
	//$scope.surname = $window.localStorage.getItem('surname');
	$scope.logout = function(){
		MainService.logout().then(function success(data){
			console.log("logout");
			$window.sessionStorage.removeItem('completeName');
			$window.sessionStorage.removeItem('id');
				//$window.localStorage.removeItem('surname');
			$state.go('login');
		}, function error(err){
			console.log("error");
		});
	}
}]);
