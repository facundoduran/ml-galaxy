var Point = require('./Point');

var Line = function (pointA, pointB) {
	this.pointA = pointA;
	this.pointB = pointB;
};

Line.prototype.getSlope = function () {
	var x = this.pointB.x - this.pointA.x;
	var y = this.pointB.y - this.pointA.y;

	return x !== 0 ? y/x : 0;
};

module.exports = Line;