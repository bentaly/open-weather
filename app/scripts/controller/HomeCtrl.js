(function () {
    'use strict';
    angular.module('ow.controllers')
        .controller('HomeCtrl', ['$scope', '$window', 'WeatherService',
            function ($scope, $window, WeatherService) {
                
                $scope.placeVar = {};

                var init = function() {
                    $scope.weather = {
                        list: []
                    };
                };

                var getWeatherData = function(lat, lon, fromGeo) {
                    WeatherService.getWeatherByCoords({lat: lat, lon: lon}).then(function(data) {
                        if (!angular.isUndefined(data) && !angular.isUndefined(data.list) && data.list.length > 0) {
                            var weather = data.list[0].weather;
                            if (!angular.isUndefined(weather) && weather.length > 0) {
                                $scope.weather.current = weather[0].description;
                                $scope.weather.icon = weather[0].icon;

                                //assign the rest of the array to weather list
                                data.list.shift();
                                $scope.weather.list = data.list;
                            }
    
                            $scope.fromGeo = fromGeo;                            
                        }
                    });
                };

                $scope.$watch('placeVar', function(newVal, oldVal) {
                    //check it has data, bower component comes without a place change success
                    if (!angular.isUndefined(newVal) && angular.isObject(newVal) && Object.keys(newVal).length > 0 ) {
                        init();
                        getWeatherData(newVal.geometry.location.lat(), newVal.geometry.location.lng(), false);
                    }
                });               
                
                $window.navigator.geolocation.getCurrentPosition(function(position) {
                    init();
                    //get data from user position
                    getWeatherData(position.coords.latitude, position.coords.longitude, true);
                }, function(err) {
                    console.log("Error", err);
                });

                init();
            }]);
})();
