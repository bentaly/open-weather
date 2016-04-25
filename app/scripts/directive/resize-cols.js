(function() {

    'use strict';

    angular.module('bh')
        .directive('resizeCols', ['$window', function($window) {
            return {
                restrict: 'C',
                scope : true,

                link: function(scope, element) {
                    var resize = function() {
                        var firstGreenBlockHeight = angular.element(element.find('article:nth-of-type(2) .green-block-small').get(0)).height() + 48
                        var secondGreenBlockHeight = angular.element(element.find('article:nth-of-type(2) .green-block-small').get(1)).height() + 48;
                        var imgHeight = angular.element(element.find('article:nth-of-type(2) img').get(0)).height() + 25;

                        var height = firstGreenBlockHeight + secondGreenBlockHeight + imgHeight + 24;
                        element.height(height);
                        element.find('article:last iframe').height(height - imgHeight);
                    };

                    angular.element($window).bind('resize', function(){
                        if($window.innerWidth >= 600) {
                            resize();
                        } else {
                            element.height("100%");
                        }
                    });

                    scope.$on('resize',function(event, data){
                        if($window.innerWidth >= 600) {
                            resize();
                        }
                    });
                }
            };
        }]);

})();
