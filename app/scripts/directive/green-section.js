(function() {

    'use strict';

    angular.module('bh')
        .directive('greenSection', [function() {
            return {
                restrict: 'E',
                scope : {
                    img: '=',
                    copy: '=',
                    donate: '=?'
                },
                templateUrl: 'partials/directive/green-section.html'
            };
        }]);

})();
