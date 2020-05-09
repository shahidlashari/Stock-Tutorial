const router = require('express').Router();
// /api/users prepended to every route inside of here
const stocksController = require('../../../controllers/stocksController');

// /api/users
router.route('/signup')
  .post(stocksController.userInfo)
  .get(stocksController.getUserInfo);

// eslint-disable-next-line semi
router.route('/')
module.exports = router;
