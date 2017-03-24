angular.module('mean-app').controller('editProfileController',['$window','MainService','$scope', function($window, MainService, $scope){

	var init = function(){
		$scope.user = {};
		var id = $window.sessionStorage.getItem('id');
		MainService.getInfo(id).then(function success(data){
			console.log(data);
			$scope.user.name = data.data.name;
			$scope.user.surname = data.data.surname;
			$scope.user.email = data.data.email;
			$scope.user.password = data.data.password;
		},function error(err){

		});
	}

	$scope.update = function(user){
		var id = $window.sessionStorage.getItem('id');
		MainService.updateInfo(id,user).then(function success(data){
			console.log(data);
		},function error(err){

		});
	}

	init();
}]);