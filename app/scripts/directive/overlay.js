(function() {

    'use strict';

    angular.module('bh')
        .directive('overlay', [function() {
            return {
                restrict: 'E',
                scope : {
                    visible: '='
                },
                templateUrl: 'partials/directive/overlay.html'
            };
        }]);

})();
