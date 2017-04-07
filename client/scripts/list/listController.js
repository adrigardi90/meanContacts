angular.module('mean-app')
	.controller('listController',['$window','MainService','$scope','$state', 
		function($window, MainService, $scope, $state){

	var id = $window.sessionStorage.getItem('id');
	$scope.contacts = [];

	function init(){				
		MainService.getInfo(id).then(function success(data){
			$scope.contacts = data.data.contacts;
		},function error(err){

		});
	}

	$scope.click = function(){
		console.log("click")
	}

	$scope.deleteContact = function(mobile){
		MainService.deleteContact(id,mobile).then(function(data){
			init();
		},function(err){

		});
	}

	$scope.showDetail = function(mobile){
		$state.go('Home.Main.Detail', {phone: mobile});
	}

	init();
}]);