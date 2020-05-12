const router = require('express').Router();
const stocksController = require('../../../controllers/stocksController');

// /api/stocks prepended to every route inside of here

router.route('/show')
  .get(stocksController.getStock);

router.route('/save')
  .get(stocksController.getSavedStock)
  .post(stocksController.postStock);

router.route('/buy')
  .get(stocksController.getOwnedStock)
  .post(stocksController.buyStocks);

router.route('/sell')
  .get(stocksController.getSoldStock)
  .post(stocksController.sellStocks);

router.route('/trading')
  .get(stocksController.getTrading);

router.route('/tradingBySymbol')
  .get(stocksController.getTradingBySymbol);

module.exports = router;
