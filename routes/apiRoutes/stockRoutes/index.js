const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks
router.route('/')
.get(stocksController.getAllStock);

// /api/stocks/:id
router.route('/:id')

module.exports = router;

