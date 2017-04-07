angular.module('mean-app').controller('settingsController',['$window','MainService','$scope', function($window, MainService, $scope){

	$scope.delete = function(){
		var id = $window.sessionStorage.getItem('id');

		MainService.deleteUser(id).then(function success(data){
			console.log("user deleted")
		}, function err(err){

		});
	}

	function init(){
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

	function logout(){
		MainService.logout().then(function success(data){
			console.log("logout");
			$window.sessionStorage.removeItem('completeName');
			$window.sessionStorage.removeItem('id');
				//$window.localStorage.removeItem('surname');
			$state.go('login');
		}, function error(err){
			console.log("error");
		})
	}
	
	init();
}]);