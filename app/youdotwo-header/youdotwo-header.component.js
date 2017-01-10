'use strict';

// Register `phoneList` component, along with its associated controller and template
angular
  .module('youdotwoHeader')
  .component('youdotwoHeader', {
    templateUrl: 'youdotwo-header/youdotwo-header.template.html',
    controller:['$http', function YoudotwoHeaderController($http) {
        var self = this;
        self.orderProp = 'order';

        $http.get('youdotwo-header/headers/headers.json').then(function(response) {
        self.headers = response.data;
        });
    }]
});