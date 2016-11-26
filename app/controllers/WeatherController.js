const daysInYears = 365;
var forecastMetricsConst = require('../lib/ForecastConst');
var forecastMetrics = forecastMetricsConst.forecastMetricsConst;

var mongoose = require('mongoose');
var Forecast = mongoose.model('Forecast');

var weatherController = function (weatherService) {
	this.weatherService = weatherService;
}

weatherController.prototype.predictDay = function (req, resp) {
	var day = req.params.day;
	return resp.json(this.weatherService.predictDay(day));
}

weatherController.prototype.predictYears = function (req, resp) {
	var year = req.params.year * daysInYears;
	return resp.json(this.weatherService.predictYears());
}

weatherController.prototype.getDroughtPeriods = function (req, resp) {
	return resp.json(this.weatherService.getDroughtPeriods);
}

weatherController.prototype.getRainPeriods = function (req, resp) {
	return resp.json(this.weatherService.getRainPeriods);
}

weatherController.prototype.getOptimalConditions = function (req, resp) {
	return resp.json(this.weatherService.getOptimalConditions);
}

weatherController.prototype.getMaxPeakRain = function (req, resp) {
	var day = req.params.day;
	var maxPeakRain = this.weatherService.getMaxPeakRain();
	return resp.json(maxPeakRain);
}

weatherController.prototype.handleError = function() {
	response.send(500);
}

module.exports = weatherController;