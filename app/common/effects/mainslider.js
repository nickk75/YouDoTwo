'use strict';

angular
    .module('youdotwoMainslider', ['ngAnimate', 'ngTouch'])
    .component('youdotwoMainslider', {
        templateUrl: 'youdotwo-mainslider/youdotwo-mainslider.template.html',
        controller('MainCtrl', function YoudotwoMainsliderController($http) {
            var self = this;
            self.orderProp = 'id';

            $http.get('youdotwo-mainslider/images/images.json').then(function(response)
            self.images = response.data;

            self.direction = 'left';
            self.currentIndex = 0;

        self.setCurrentSlideIndex = function (index) {
            self.direction = (index > self.currentIndex) ? 'left' : 'right';
            self.currentIndex = index;
        };

        self.isCurrentSlideIndex = function (index) {
            return self.currentIndex === index;
        };

        self.prevSlide = function () {
            self.direction = 'left';
            self.currentIndex = (self.currentIndex < self.slides.length - 1) ? ++self.currentIndex : 0;
        };

        self.nextSlide = function () {
            self.direction = 'right';
            self.currentIndex = (self.currentIndex > 0) ? --self.currentIndex : self.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });
});




