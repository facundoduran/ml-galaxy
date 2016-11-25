var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({
    name: String,
    radius: Number,
    angularVelocity: Number,
    direction: String
});

module.exports = mongoose.model('Planet', planetSchema);