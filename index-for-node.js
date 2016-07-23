var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(request, response) {
  response.render('index.html');
});

//simple pass through to avoid the mixed content warning
app.get('/openweather', function(request, response) {

	var lat = request.query.lat;
	var lon = request.query.lon;

	http.get({
        host: 'api.openweathermap.org',
        path: '/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&APPID=dedd79971f93165d2cef44b9db425c80'
    }, function(res) {
        // Iteratively update stream with data
        var body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            response.send(body);
        });
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
