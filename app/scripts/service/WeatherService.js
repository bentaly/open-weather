(function() {

    'use strict';

    angular.module('ow.services')
        .factory('WeatherService', ['$resource', function($resource) {

            var openWeatherMap = {
                host: 'http://api.openweathermap.org/data/2.5/forecast?',
                endPoints: {
                    place: 'q=:place',
                    coord: 'lat=:lat&lon=:lon'
                },
                key: '&APPID=dedd79971f93165d2cef44b9db425c80'
            }

            var getWeatherByCoords =  $resource(openWeatherMap.host + openWeatherMap.endPoints.coord + openWeatherMap.key, {}, {});

            return {

                getWeatherByCoords: function(coords, successCb, errCb) {
                    
                    var request = getWeatherByCoords.get({lat: coords.lat, lon: coords.lon});
                    return request.$promise;
                }
            };
        }
    ]);
})();