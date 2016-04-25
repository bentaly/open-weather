(function() {

    'use strict';

    angular.module('bh')
        .directive("scroll", ['$window', '$timeout', function ($window, $timeout) {
            return {
                restrict: 'A',
                scope : true,
                
                link: function(scope, element) {
                    //hit this on page load
                    if($window.innerWidth > 600) {
                        var scrollFunction = function() {
                            if ($window.pageYOffset +  $window.innerHeight - 200 >= element.offset().top) {
                                $timeout(function() {
                                    scope.boolChangeClass = true;
                                    angular.element($window).off("scroll", scrollFunction);
                                });
                            }
                        };
        
                        angular.element($window).on("scroll", scrollFunction);
        
                        scope.$on('$destroy', function () {
                            angular.element($window).off('scroll', scrollFunction);
                        });

                        scrollFunction();
                    }
                }};
            }]);
})();
