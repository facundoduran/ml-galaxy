var Point = function (x, y) {
	this.x = x;
	this.y = y;	
};

Point.prototype.x = function() {
	return this.x;
}

Point.prototype.y = function() {
	return this.Y;
}

module.exports = Point;