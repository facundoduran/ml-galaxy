var Planet = require('../modules/planet');
var Triangle = require('./triangle');
var Line = require('./line');
var Point = require('./line');

var Orbits = function (ferengi, betasoide, vulcano, sun) {
	this.sun = sun;
	this.ferengi = ferengi;
	this.betasoide = betasoide;
	this.vulcano = vulcano;
};

//source http://www.mathpages.com/home/kmath161/kmath161.htm
Orbits.prototype.arePlanetsAligned = function (ferengiPosition, betasoidePosition, vulcanoPosition) {
	var lineFerenguiBetasoide = new Line(betasoidePosition, ferengiPosition);
	var lineBetasoideVulcano = new Line(vulcanoPosition, betasoidePosition);

	return this.colinear(ferengiPosition.x, ferengiPosition.y, 
		betasoidePosition.x, betasoidePosition.y, 
		vulcanoPosition.x, vulcanoPosition.y);
}

Orbits.prototype.colinear = function (x1, y1, x2, y2, x3, y3) {
	var colinear = (y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2);
  	return this.equals(colinear, 0);
}

Orbits.prototype.equals = function (doubleA, doubleB) {
    return Math.abs(doubleA - doubleB) < 0.0000001;
}

Orbits.prototype.arePlanetsAlignedWithSun = function (ferengiPosition, betasoidePosition) {
	var lineFerenguiBetasoide = new Line(betasoidePosition, ferengiPosition);
	var lineFerenguiSun = new Line(ferengiPosition, this.sun);
	var difference = lineFerenguiBetasoide.getSlope() - lineFerenguiSun.getSlope();
	return this.equals(difference, 0);
}

Orbits.prototype.getPlanetsArea = function (ferengiPosition, betasoidePosition, vulcanoPosition) {
	var triangle = new Triangle(ferengiPosition, betasoidePosition, vulcanoPosition);
	return triangle.getPerimeter();
}

Orbits.prototype.isSunInPlanetsArea = function (ferenguiPosition, betasoidePosition, vulcanoPosition) {
	var triangle = new Triangle(ferenguiPosition, betasoidePosition, vulcanoPosition);
	return triangle.isDotIn(this.sun);
}

module.exports = Orbits;