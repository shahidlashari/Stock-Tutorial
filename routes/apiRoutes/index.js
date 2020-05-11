const router = require('express').Router();
const stockRoutes = require('./stockRoutes');
const userRoutes = require('./userRoutes');

// /api prepended to everyRoute inside of here
router.use('/stocks/', stockRoutes);
router.use('/users/', userRoutes);

module.exports = router;
