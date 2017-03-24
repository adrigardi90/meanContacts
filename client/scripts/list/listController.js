angular.module('mean-app').controller('listController',['$window','MainService','$scope', function($window, MainService, $scope){

	var init = function(){
		$scope.contacts = [];
		var id = $window.sessionStorage.getItem('id');
		MainService.getInfo(id).then(function success(data){
			console.log(data)
			$scope.contacts = data.data.contacts;
			console.log($scope.contacts)
		},function error(err){

		});
	}

	$scope.click = function(){
		console.log("click")
	}

	init();
}]);