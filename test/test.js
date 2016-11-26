var assert = require('assert');
var Point = require('../app/modules/Point');
var Triangle = require('../app/lib/Triangle');

describe('Triangle', function() {
  describe('get the perimeter of the triangle', function() {
    it('should be returns the perimeter a + b + c', function(done) {
    	var vertexA = new Point(4, 10);
    	var vertexB = new Point(4, 0);
    	var vertexC = new Point(-7, 4);
      var triangle = new Triangle(vertexA, vertexB, vertexC);
      var perimeter = triangle.getPerimeter();
      assert.equal(perimeter.toFixed(2), 34.23);
    });
  });
});