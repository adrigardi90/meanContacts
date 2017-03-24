angular.module('mean-app').factory('AuthService',['$auth','$window', '$rootScope','$state',function($auth,$window,$rootScope,$state){

	function getAuth(){

		//auth
		this.getNavigation = function(event){
			
			if($auth.isAuthenticated()){
				console.log("Autenticado");

				if($rootScope.toState.name ==='login' || $rootScope.toState.name ==='register'){
					event.preventDefault();
					$state.go($rootScope.fromState.name)
				}

					
			}else{
				console.log("No autenticado")

				if($rootScope.toState.module === 'private'){	
					event.preventDefault();
					$state.go('login')

				}
			}
		}

	}

	return new getAuth();
}]);