const daysInYears = 365;
var forecastConditionsLib = require('../lib/ForecastConst');
var forecastConditions = forecastConditionsLib.forecastConditions;

var mongoose = require('mongoose');
var Forecast = mongoose.model('Forecast');

module.exports.predictDay = function (req, resp) {
	var day = req.params.day;

	var forecast = Forecast.findOne({ 'day': day });
	forecast.exec(function (err, forecastDay) {
		if (err) {
			resp.status(500);
            resp.json({
                type: false,
                data: "Error occured: " + err
            });
		}
		resp.status(200);
		return resp.json(forecastDay);
	});
};

module.exports.predictYears = function (req, resp) {
	var days = req.params.year * daysInYears;
	
	var forecasts = Forecast.find()
		.where('day').lte(days);

	forecasts.exec(function (err, forecast){
		if (err) {
			resp.status(500);
            resp.json({
                type: false,
                data: "Error occured: " + err
            });			
		};

		resp.status(200);
		return resp.json(forecast);
	});
};

module.exports.getDroughtPeriods = function (req, resp) {	
	var forecastQuery = Forecast.find({ 'weather': forecastConditions.drought });

	forecastQuery.count(function (err, forecast){
		if (err) {
			resp.status(500);
            resp.json({
                type: false,
                data: "Error occured: " + err
            });			
		};

		resp.status(200);
		return resp.json(forecast);
	});
};

module.exports.getRainPeriods = function (req, resp) {
	var forecastQuery = Forecast.find({ 'weather': forecastConditions.rainy });
		
	forecastQuery.count(function (err, forecast){
		if (err) {
			resp.status(500);
            resp.json({
                type: false,
                data: "Error occured: " + err
            });			
		};

		resp.status(200);
		return resp.json(forecast);
	});	
};

module.exports.getMaxRainDay = function (req, resp) {
	var forecastQuery = Forecast.find({ weather: forecastConditions.rainy })
		.sort({ 'peak' : -1})
		.limit(1)
		.exec(function (err, forecast) {
			if (err) {
				return resp.status(500).send(err.errorMessage);
			}
				
			resp.status(200);
			return resp.json(forecast);
		});
}

module.exports.getOptimalConditions = function (req, resp) {
	var forecastQuery = Forecast.find({ 'weather': forecastConditions.optimal });
		
	forecastQuery.count(function (err, forecast){
		if (err) {
			resp.status(500);
            resp.json({
                type: false,
                data: "Error occured: " + err
            });
		};

		resp.status(200);
		return resp.json(forecast);
	});
};