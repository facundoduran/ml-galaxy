var Point = require('./Point');

var Direction = {
	clockwise: 1,
	counterclockwise: -1
}

var Planet = function (name, distance, angularVelocity, direction) {
	this.name = name;
	this.distance = distance;
	this.angularVelocity = angularVelocity;
	this.direction = direction;
};

Planet.prototype.getName = function () {
	return this.name;
}

Planet.prototype.getDistance = function () {
	return this.distance;
}

Planet.prototype.getAngularVelocity = function () {
	return this.angularVelocity;
}

Planet.prototype.getDirection = function () {
	return this.direction;
}

Planet.prototype.getPosition = function (day) {
	var angle = this.angularVelocity * this.direction * day * Math.PI / 180 ;
	var x = this.distance * Math.cos(angle);
	var y = this.distance * Math.sin(angle);

	return new Point(x, y);
}

module.exports.Planet = Planet;
module.exports.Direction = Direction;