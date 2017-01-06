'use strict';

angular.
  module('youdotwoApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
        template: '<youdotwo-header></youdotwo-header>'
      }).
        when('/slider', {
        template: '<youdotwo-carousel></youdotwo-carousel>'
      }).
        when('/login', {
        template: '<youdotwo-login></youdotwo-login>'
      }).
        when('/signup', {
        template: '<youdotwo-signup></youdotwo-signup>'
      }).
        otherwise('/slider');
    }
  ]);
