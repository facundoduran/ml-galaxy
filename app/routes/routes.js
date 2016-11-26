var seedController = require('../controllers/SeedController');

var routes = function (weatherController, router) {
	this.weatherController = weatherController;
	this.router = router;
}

routes.prototype.getRouter = function() {
	return this.router;
}

routes.prototype.registerRoutes = function() {

	var weatherController = this.weatherController;

	this.router.get('/predict/day/:day', weatherController.predictDay);

	this.router.get('/predict/years/:year', weatherController.predictYears);

	this.router.get('/predict/getDroughtPeriods', weatherController.getDroughtPeriods);   

	this.router.get('/predict/getRainPeriods', weatherController.getRainPeriods);

	this.router.get('/predict/getMaxPeakRain', weatherController.getMaxPeakRain);

	this.router.get('/predict/getOptimalConditions', weatherController.getOptimalConditions);

	this.router.post('/seed', seedController.generateData);
}


module.exports = routes;