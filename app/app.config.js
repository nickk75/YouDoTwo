'use strict';

angular
  .module('youdotwoApp')
    .config(['$urlRouterProvider' ,'$stateProvider',
     function config($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        component: 'youdotwoHeader'
      })
    }])

//       $routeProvider.
//         when('/', {
//         template: '<youdotwo-header></youdotwo-header>'
//       }).
//         when('/slider', {
//         template: '<youdotwo-carousel></youdotwo-carousel>'
//       }).
//         when('/login', {
//         template: '<youdotwo-login></youdotwo-login>'
//       }).
//         when('/signup', {
//         template: '<youdotwo-signup></youdotwo-signup>'
//       }).
//         otherwise('/slider');
//     }
//   ]);
