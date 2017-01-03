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
        otherwise('/');
    }
  ]);
