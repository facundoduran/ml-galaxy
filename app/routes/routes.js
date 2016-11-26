var seedController = require('../controllers/SeedController');
var weatherController = require('../controllers/WeatherController');

var routes = function (router) {
	this.router = router;
}

routes.prototype.getRouter = function() {
	return this.router;
}

routes.prototype.registerRoutes = function() {
	this.router.get('/predict/day/:day', weatherController.predictDay);

	this.router.get('/predict/years/:year', weatherController.predictYears);

	this.router.get('/predict/getDroughtPeriods', weatherController.getDroughtPeriods);   

	this.router.get('/predict/getRainPeriods', weatherController.getRainPeriods);

	this.router.get('/predict/getMaxRainDay', weatherController.getMaxRainDay);

	this.router.get('/predict/getOptimalConditions', weatherController.getOptimalConditions);

	this.router.post('/seed', seedController.generateData);
}

module.exports = routes;