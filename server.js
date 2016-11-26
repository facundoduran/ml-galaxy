var express = require('express');
var bodyParser = require('body-parser');
var expressRouter = require('express').Router();

var mongoose = require('mongoose');
//var mongoConnectionString =
//    process.env.MONGOLAB_URI ||
//    process.env.MONGOHQ_URL ||
//    'mongodb://facundodura:fakund0@ds111188.mlab.com:11188/forecast'

var mongoConnectionString = 'mongodb://facundoduran:fakund0123@ds111188.mlab.com:11188/forecast';
//mongoose.connect(mongoConnectionString);

mongoose.connect(mongoConnectionString, function(err){
	if (err) {
		console.log(err);
	};
});

//model require
var Forecast = require('./app/models/Forecast');

//controller require
var SeedController = require('./app/controllers/SeedController');
var WeatherController = require('./app/controllers/WeatherController');

//routes
var router = require('./app/routes/routes');
var routes = new router(expressRouter);
routes.registerRoutes();
var appRoutes = routes.getRouter();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', appRoutes);
app.listen(port);