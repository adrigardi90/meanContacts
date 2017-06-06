angular.module('mean-app')
	.controller('detailController',['$window','MainService','$scope','$state','$stateParams', 
		function($window, MainService, $scope, $state, $stateParams){

	var id = $window.sessionStorage.getItem('id');

	function init(){
		MainService.getInfoContact(id, $stateParams.phone).then(function success(data){
			$scope.contactDetail = data.data;
		},function error(err){
			console.log(err);
		});
	}

	init();
}]);