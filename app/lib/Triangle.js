var Point = require('../modules/Point');

var Triangle = function (pointA, pointB, pointC) {
	this.vertexA = pointA;
	this.vertexB = pointB;
	this.vertexC = pointC;
};

//source http://blackpawn.com/texts/pointinpoly/
Triangle.prototype.isDotIn = function (p) {
	var p0 = this.vertexA;
	var p1 = this.vertexB;
	var p2 = this.vertexC;

    var s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y);
    var t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y);

    if (s <= 0 || t <= 0) 
    	return false;

    var A = (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);

    return (s + t) < A;
}

Triangle.prototype.getPerimeter = function() {
	var a = this.getLineLength(this.vertexB, this.vertexA);
	var b = this.getLineLength(this.vertexC, this.vertexB);
	var c = this.getLineLength(this.vertexA, this.vertexC);

	return a + b + c;
};

Triangle.prototype.getLineLength = function (pointA, pointB) {
	return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2) );
};

module.exports = Triangle;