const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks
router.route ('/show')
.get(stocksController.getApiStock);
// .get(stocksController.getStock);
// /api/stocks
router.route('/')
.post(stocksController.postStock)
// .get(stocksController.getStock)
// .get(stocksController.getStock)
// .get(stocksController.getApiStock);

router.route('/buy')
.patch(stocksController.buyStocks);
router.route('/sell')
.patch(stocksController.sellStocks);
// /api/stocks/:id
// router.route('/:id')
module.exports = router;