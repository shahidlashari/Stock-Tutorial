const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks
router.route('/')
.post(stocksController.postStock)
.get(stocksController.getStock)
.delete(stocksController.deleteStock);


router.route('/buy')
.patch(stocksController.buyStocks);

router.route('/sell')
.patch(stocksController.sellStocks);

// /api/stocks/:id
// router.route('/:id')

module.exports = router;

