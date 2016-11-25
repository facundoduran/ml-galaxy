var PlanetModule = require('./Planet');
var Point = require('./Point');
var Astronomic = require('../lib/Astronomic');
var direction = PlanetModule.Direction;

var sun = new Point(0, 0);

var forecastConditions =  {
	drought : 'DROUGHT',
	optimal : 'OPTIMAL',
	normal : 'NORMAL',
	rainy : 'RAINY'
};

var galaxySeed = function () {
	this.ferengi = new PlanetModule.Planet('Ferengi', 500, 1, direction.clockwise);
	this.betasoide = new PlanetModule.Planet('Betasoide', 1000, 3, direction.clockwise);
	this.vulcano = new PlanetModule.Planet('Vulcano', 2000, 5, direction.counterclockwise);
	this.astronomic = new Astronomic(this.ferengi, this.betasoide, this.vulcano, sun);
	this.forecastReport = [];
};

galaxySeed.prototype.generatePredictions = function (days) {
	var t = 0;
	var maxArea = 0;
	var maxDay = 0;

	for(t = 1; t <= days; t++) {
		var ferengiPosition = this.ferengi.getPosition(t);
		var betasoidePosition = this.betasoide.getPosition(t);
		var vulcanoPosition = this.vulcano.getPosition(t);

		var prediction = this.generatePrediction(ferengiPosition, betasoidePosition, vulcanoPosition);
		this.saveReport(prediction);

		if (prediction === forecastConditions.rainy) {
			var area = this.astronomic.getPlanetsArea(ferengiPosition, betasoidePosition, vulcanoPosition);

			if (area > maxArea) {
				maxArea = area;
				maxDay = t;
			}
		}
	}
};

galaxySeed.prototype.generatePrediction = function(ferengiPosition, betasoidePosition, vulcanoPosition) {
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

galaxySeed.prototype.getReport = function () {
	return this.forecastReport;
}

galaxySeed.prototype.saveReport = function (condition) {
	if (!(condition in this.forecastReport)) {
		
		this.forecastReport[condition] = 0

		return;
	}

	this.forecastReport[condition] = this.forecastReport[condition] + 1;
};

module.exports = galaxySeed;