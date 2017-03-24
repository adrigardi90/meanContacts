/* INICIO APP E INJECTO DEPENDENCIAS */
var app = angular.module('mean-app', ['ui.bootstrap', 'ui.router', 'ngMaterial', 'satellizer']);

/* ROUTERS */
app.config(function ($urlRouterProvider, $authProvider) {

	$urlRouterProvider.otherwise('/login');

    // Parametros de configuración
	$authProvider.loginUrl = "http://localhost:3030/api/auth/login";
	$authProvider.signupUrl = "http://localhost:3030/api/auth/register";
	//Save in LocalStorage with value ContactCalendar_token
	$authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "ContactCalendar";

});

app.run(function ($rootScope, AuthService) {

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toStateParams, fromState) {
        $rootScope.toState = toState;
        $rootScope.fromState = fromState;
        console.log(toState)
        console.log(fromState)
        AuthService.getNavigation(event);
	});
});