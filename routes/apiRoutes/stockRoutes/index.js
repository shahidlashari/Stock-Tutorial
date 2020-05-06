const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks
router.route('/')
.post(stocksController.postStock)
// .get(stocksController.getStock)

.get(stocksController.getApiStock);

// /api/stocks/:id
// router.route('/:id')

module.exports = router;

