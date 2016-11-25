var express = require('express');
var bodyParser = require('body-parser');
var router = require('./app/routes/routes');
//Modules import
var planetModule = require('./app/modules/planet');
var astronomicModule = require('./app/lib/astronomic');

var galaxySeedModule = require('./app/modules/galaxySeed');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port);

//var mongoose = require('mongoose'),
//	Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/ml-galaxy');  
/*
var direction = planetModule.Direction;
var vulcano = new planetModule.Planet('Vulcano', 2000, 5, direction.clockwise);
*/


var galaxySeed = new galaxySeedModule();

galaxySeed.generatePredictions(3650);

var report = galaxySeed.getReport();

console.log(report);