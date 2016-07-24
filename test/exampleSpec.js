describe('WeatherService', function() {

    var WeatherService,
        $httpBackend,
        $resource;

    beforeEach(function () {

        module('ow');

        inject(function (_$httpBackend_, _WeatherService_, _$resource_) {
            $httpBackend = _$httpBackend_;
            $resource = _$resource_;
            WeatherService = _WeatherService_;
        });
    });

	describe('Weather service', function() {
		it('should be defined', function () {
			expect(WeatherService).toBeDefined();	
		});
	});

    describe('getWeatherByCoords', function() {
        it('should call getWeatherByCoords with coords', function () {
            $httpBackend.expectGET('https://open-weather-buildit.herokuapp.com/openweather?lat=0&lon=0')
                .respond({weather: 'Sunny'});
            
            var result = WeatherService.getWeatherByCoords({lat: 0, lon: 0});
            result.then(function(res) {
            	expect(res.weather).toEqual('Sunny');
            });
            $httpBackend.flush();
        });
    });
});