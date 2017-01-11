'use strict';

// Register `phoneList` component, along with its associated controller and template
angular
  .module('youdotwoPrimaryNavbar')
  .component('youdotwoPrimaryNavbar', {
    templateUrl: 'youdotwo-primarynavbar/youdotwo-primarynavbar.template.html',
    controller:['$http', function YoudotwoPrimaryNavbarController($http) {
        var self = this;
        self.orderProp = 'order';

        $http.get('youdotwo-primarynavbar/headers/headers.json').then(function(response) {
        self.headers = response.data;
        });
    }]
});