angular.module('mean-app').config(function ($stateProvider) {
    
    //Login state is public
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login/loginTemplate.html',
      controller: 'loginController',
      module: 'public'
    });

});