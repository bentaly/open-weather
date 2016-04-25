(function() {

    'use strict';

    angular.module('bh')
        .directive('patronBlock', [function() {
            return {
                restrict: 'E',
                scope : {
                    patron: "="
                },
                templateUrl: 'partials/directive/patron-block.html'
            };
        }]);

})();
