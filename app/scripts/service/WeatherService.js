(function() {

    'use strict';

    angular.module('ow.services')
        .factory('WeatherService', ['$resource', function($resource) {

            var url = 'https://open-weather-buildit.herokuapp.com/openweather';

            //node server must be running for this
            var getWeatherByCoords =  $resource(url + '?lat=:lat&lon=:lon', {}, {});
            
            return {

                getWeatherByCoords: function(coords, successCb, errCb) {
                    
                    var request = getWeatherByCoords.get({lat: coords.lat, lon: coords.lon});
                    return request.$promise;
                }
            };
        }
    ]);
})();