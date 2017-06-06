angular.module('mean-app').factory('AuthService',['$auth','$window', '$rootScope','$state',function($auth,$window,$rootScope,$state){

	function getAuth(){

		//auth navigation
		this.getNavigation = function(event){
			
			if($auth.isAuthenticated()){
				console.log("Autenticado");

				if($rootScope.toState.name ==='login' || $rootScope.toState.name ==='register'){
					//We need to stop the process
					event.preventDefault();
					$state.go($rootScope.fromState.name);
					
				}
					
			}else{
				console.log("No autenticado")

				//We can not navigate to private state without authentication
				if($rootScope.toState.module === 'private'){
					//We need to stop the process	
					event.preventDefault();
					$state.go('login')
				}
			}
		}
	}

	return new getAuth();
}]);