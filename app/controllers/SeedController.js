var _seedService;

var mongoose = require('mongoose');
var Forecast = mongoose.model('Forecast');

var seedService = require('../services/SeedService');

module.exports.generateData = function (req, resp) {
	seedService.predictAll();
	var predictions = seedService.getPredictions();

	var forecast = new Forecast({
		day: predictions[0].day,
		weather: predictions[0].prediction,
		maxPeak: predictions[0].maxPeak
	});

	forecast.save(function(err, forecast) {
        if (err) {
    		return res.status(500).send( err.message);
		}

    	res.status(200).jsonp(forecast);
	});
};