angular.module('mean-app').config(function ($stateProvider) {
    
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login/loginTemplate.html',
      controller: 'loginController',
      module: 'public'
    });

  });