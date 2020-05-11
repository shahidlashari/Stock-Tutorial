const router = require('express').Router();
// /api/stocks prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/stocks

router.route('/show')
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

module.exports = router;
