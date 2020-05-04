const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// / prepended to everyRoute
router.use('/api', apiRoutes);

module.exports = router;
