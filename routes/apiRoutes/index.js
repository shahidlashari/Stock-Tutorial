const router = require('express').Router();
const stockRoutes = require('./stockRoutes');

// /api prepended to everyRoute inside of here
router.use('/stocks', stockRoutes);

module.exports = router;
