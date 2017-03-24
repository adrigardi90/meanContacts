angular.module('mean-app').config(function ($stateProvider) {
    
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'views/register/registerTemplate.html',
      controller: 'registerController',
      module: 'public'
    });

  });