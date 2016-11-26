var express = require('express');
var bodyParser = require('body-parser');
var expressRouter = require('express').Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://facundodura:fakund0123@ds111188.mlab.com:11188/forecast');

//model require
var Forecast = require('./app/models/Forecast');

//services require
var WeatherService = require('./app/services/WeatherService')

//controller require
var SeedController = require('./app/controllers/SeedController');
var WeatherController = require('./app/controllers/WeatherController');

//service instantiation
var weatherService = new WeatherService();

//controller instantiation
var weatherController = new WeatherController(weatherService);

//routes
var router = require('./app/routes/routes');
var routes = new router(weatherController, expressRouter);
routes.registerRoutes();
var appRoutes = routes.getRouter();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', appRoutes);
app.listen(port);