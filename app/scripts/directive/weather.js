(function() {
    'use strict';
    angular.module('ow.directives')
        .directive('weather', [function() {
            return {

                scope: {
                    weather: "="
                },
                restrict:'E',
                templateUrl: 'partials/directive/weather.html',
                replace: false,

                controller: function($scope) {

                    $scope.date = $scope.weather.dt * 1000;
                    $scope.weatherInstance = $scope.weather.weather[0];
                }
            };
        }]);
})();