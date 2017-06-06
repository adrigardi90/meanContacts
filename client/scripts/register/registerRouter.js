angular.module('mean-app').config(function ($stateProvider) {
    
    //Register state is public
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'views/register/registerTemplate.html',
      controller: 'registerController',
      module: 'public'
    });
});