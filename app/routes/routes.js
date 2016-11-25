const router = require('express').Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/predict/day/:day', function (req, res) {
    res.json({ message: 'predict/day' });   
});

router.get('/predict/years/:year', function (req, res) {
	res.json({ message: 'predict/years' });   
});

router.get('/predict/getDroughtPeriods', function (req, res) {
	res.json({ message: 'predict/getDroughtPeriods' });   
});

router.get('/predict/getRainPeriods', function (req, res) {
	res.json({ message: 'predict/getRainPeriods' });   
});

router.get('/predict/getMaxPeakRain', function (req, res) {
	res.json({ message: 'predict/getMaxPeakRain' });   
});

router.get('/predict/getOptimalConditions', function (req, res) {
	res.json({ message: 'predict/getOptimalConditions' });   
});

router.get('/predict/getMaxTemperature', function (req, res) {
	res.json({ message: 'predict/getMaxTemperature' });   
});

module.exports = router;