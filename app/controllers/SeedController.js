var mongoose = require('mongoose');
var Forecast = mongoose.model('Forecast');

var seedService = require('../services/SeedService');

module.exports.generateData = function (req, resp) {
	seedService.predictAll();
	var predictions = seedService.getPredictions();
	var hasErrors;
	var errorMessage;

	predictions.forEach(function(prediction) {
       	var forecast = new Forecast({
			day: prediction.day,
			weather: prediction.weather,
			peak: prediction.peak
		});

		forecast.save(function (err, forecast){
			if (err) {
				hasErrors = true;
				errorMessage = err;
			};
		});
    });

	if (hasErrors) {	
		return res.status(500).send(errorMessage.message);
	};

    return resp.json(200);
};