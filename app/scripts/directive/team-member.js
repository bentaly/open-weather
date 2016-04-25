(function() {

    'use strict';

    angular.module('bh')
        .directive('teamMember', [function() {
            return {
                restrict: 'E',
                scope : {
                    member: '='
                },
                templateUrl: 'partials/directive/team-member.html'
            };
        }]);

})();
