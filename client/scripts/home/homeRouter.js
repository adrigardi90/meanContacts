angular.module('mean-app').config(function ($stateProvider) {
    
    $stateProvider.state('Home', {
      url: '/home',
      abstract: true,
      templateUrl: 'views/home/homeTemplate.html',
      controller: 'homeController'
    }).state('Home.Main', {
    	abstract: true,
       views: {
      		"downNav": {
            templateUrl:'views/home/contentTemplate.html'
            }
      }
    }).state('Home.Main.Menu', {
    	url:'/menu',
    	templateUrl:'views/home/menuTemplate.html',
      module: 'private'
    }).state('Home.Main.Settings', {
    	url:'/settings',
    	templateUrl:'views/settings/settingsTemplate.html',
      controller: 'settingsController',
      module: 'private'
    }).state('Home.Main.List', {
    	url:'/list',
    	templateUrl:'views/list/listTemplate.html',
      controller: 'listController',
      module: 'private'
    }).state('Home.Main.Contact', {
    	url:'/contact',
    	templateUrl:'views/contact/contactTemplate.html',
      controller: 'contactController',
      module: 'private'
    }).state('Home.Main.Edit', {
      url:'/editProfile',
      templateUrl:'views/settings/editProfileTemplate.html',
      controller: 'editProfileController',
      module: 'private'
    }).state('Home.Main.Detail', {
      url:'/showDetail/:phone',
      templateUrl:'views/detail/detailTemplate.html',
      controller: 'detailController',
      module: 'private'
    });;;

  });