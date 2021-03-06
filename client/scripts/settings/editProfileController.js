angular.module('mean-app')
	.controller('editProfileController',['$window','MainService','$scope', 
		function($window, MainService, $scope){

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
			console.log("aaaaaaa")
			console.log(err);
		});
	}

	$scope.update = function(user){

		var id = $window.sessionStorage.getItem('id');

		MainService.updateInfo(id,user).then(function success(data){
			console.log(data);
		},function error(err){
			console.log(err);
		});
	}
	
	$scope.delete = function(){

		var id = $window.sessionStorage.getItem('id');

		MainService.deleteUser(id).then(function success(data){
			console.log("user deleted");
		}, function err(err){
			console.log(err);
		});
	}

	function logout(){

		MainService.logout().then(function success(data){
			$window.sessionStorage.removeItem('completeName');
			$window.sessionStorage.removeItem('id');
			$state.go('login');
		}, function error(err){
			console.log(err);
		})
	}

	init();
}]);