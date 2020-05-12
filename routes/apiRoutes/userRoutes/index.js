const router = require('express').Router();
const stocksController = require('../../../controllers/stocksController');

// /api/users prepended to every route inside of here

router.route('/signup')
  .get(stocksController.getUserInfo)
  .post(stocksController.userInfo);

module.exports = router;
