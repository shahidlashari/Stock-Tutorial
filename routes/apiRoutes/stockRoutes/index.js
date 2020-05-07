const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks
router.route('/')
.post(stocksController.userInfo)
.get(stocksController.getUser);

//http://localhost:3001/api/stocks/search?q=TSLA is the query route
router.route('/search')
.get(stocksController.getStock);

router.route('/save')
.post(stocksController.postStock)
.get(stocksController.getSavedStock);

router.route('/buy')
.post(stocksController.buyStocks)
.get(stocksController.getOwnedStock);

router.route('/sell')
.post(stocksController.sellStocks)
.get(stocksController.getSoldStock);

router.route('/trading')
.get(stocksController.getTrading);

router.route('/tradingBySymbol')
.get(stocksController.getTradingBySymbol);


// router.route('/save')
// .post(stocksController.postStock)
// .get(stocksController.getStock)
// .delete(stocksController.deleteStock);


// router.route('/buy')
// .patch(stocksController.buyStocks);

// router.route('/sell')
// .patch(stocksController.sellStocks);

// /api/stocks/:id
// router.route('/:id')

module.exports = router;

