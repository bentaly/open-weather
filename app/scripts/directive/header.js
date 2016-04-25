(function() {

    'use strict';

    angular.module('bh')
        .directive('header', [function() {
            return {
                restrict: 'E',
                scope : {
                    state: '=?',
                    overlayVisible: '='
                },
                templateUrl: 'partials/directive/header.html',

                controller: function($scope) {
                    
                    $scope.menuToggle = function() {
                        $scope.overlayVisible = !$scope.overlayVisible;
                    };  
                }
            };
        }]);

})();
