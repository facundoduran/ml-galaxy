var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var forecastSchema = new Schema({
	day: Number,
	weather: String,
	maxPeak: Number
});

module.exports = mongoose.model('Forecast', forecastSchema);