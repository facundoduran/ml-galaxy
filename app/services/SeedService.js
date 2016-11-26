var PlanetModule = require('../modules/Planet');
var Point = require('../lib/Point');
var Astronomic = require('../lib/Astronomic');
var direction = PlanetModule.Direction;
var forecastConditionsLib = require('../lib/ForecastConst');
var forecastConditions = forecastConditionsLib.forecastConditions;

const years = 10;
const daysInYear = 365;
var sun = new Point(0, 0);

var seedService = function () {
	this.ferengi = new PlanetModule.Planet('Ferengi', 500, 1, direction.clockwise);
	this.betasoide = new PlanetModule.Planet('Betasoide', 1000, 3, direction.clockwise);
	this.vulcano = new PlanetModule.Planet('Vulcano', 2000, 5, direction.counterclockwise);
	this.astronomic = new Astronomic(this.ferengi, this.betasoide, this.vulcano, sun);
	this.predictions = [];
};

seedService.prototype.getPredictions = function () {
	return this.predictions;
};

seedService.prototype.predictAll = function () {
	var days = years * daysInYear;
	this.generatePredictions(days);
}

seedService.prototype.generatePredictions = function (days) {
	var day = 0;
	var maxArea = 0;
	var maxDay = 0;

	for(day = 1; day <= days; day++) {
		var ferengiPosition = this.ferengi.getPosition(day);
		var betasoidePosition = this.betasoide.getPosition(day);
		var vulcanoPosition = this.vulcano.getPosition(day);

		var prediction = this.generatePrediction(ferengiPosition, betasoidePosition, vulcanoPosition);

		if (prediction === forecastConditions.rainy) {
			var area = this.astronomic.getPlanetsArea(ferengiPosition, betasoidePosition, vulcanoPosition);

			this.predictions.push({ day:day, weather: prediction, peak: area });
		}
		else {
			this.predictions.push({ day:day, weather: prediction });
		}
	}
};

seedService.prototype.generatePrediction = function(ferengiPosition, betasoidePosition, vulcanoPosition) {
	if (this.astronomic.arePlanetsAligned(ferengiPosition, betasoidePosition, vulcanoPosition)) {
		if (this.astronomic.arePlanetsAlignedWithSun(ferengiPosition, betasoidePosition)) {
			return forecastConditions.drought;
		}

		return forecastConditions.optimal;
	}

	if (this.astronomic.isSunInPlanetsArea(ferengiPosition, betasoidePosition, vulcanoPosition)) {
		return forecastConditions.rainy;
	}

	return forecastConditions.normal;
};

module.exports = new seedService();