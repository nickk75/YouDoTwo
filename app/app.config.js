'use strict';

angular
  .module('youdotwoApp')
    .config(['$urlRouterProvider' ,'$stateProvider',
     function config($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        views: {

            '': {component: 'youdotwoPrimaryNavbar'},

            'carousel': {component: 'youdotwoCarousel'},

            'footer': {component: 'youdotwoFooter'}

        }
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
