// recent
const userInfo = 'INSERT INTO users SET ?;';
const updateBuyBalance = 'UPDATE users SET initial_budget = (initial_budget - ?) WHERE id = ?;';
const updateSellBalance = 'UPDATE users SET initial_budget = (initial_budget + ?) WHERE id = ?;';
const getUserInfo = 'SELECT * FROM users WHERE id=?;';
const getBalance = 'SELECT initial_budget FROM users WHERE id = ?;';
const saveStock = 'INSERT INTO savedStocks SET ?;';
const getSavedStock = `SELECT users.username, savedStocks.user_id, savedStocks.symbol, savedStocks.price, savedStocks.date_api FROM savedStocks 
                      INNER JOIN users ON users.id=savedStocks.user_id 
                      WHERE savedStocks.user_id = ? GROUP BY savedStocks.symbol;`;
const buyStocks = 'INSERT INTO ownedStocks SET ?;';
const getOwnedStocks = `SELECT users.username, ownedStocks.user_id, ownedStocks.symbol, ownedStocks.purchase_price, ownedStocks.date_api FROM ownedStocks 
                      INNER JOIN users ON users.id=ownedStocks.user_id 
                      WHERE ownedStocks.user_id = ?;`;
const sellStocks = 'INSERT INTO soldStocks SET ?;';
const getSoldStocks = `SELECT users.username, soldStocks.user_id, soldStocks.symbol, soldStocks.sell_price, soldStocks.date_api FROM soldStocks 
                      INNER JOIN users ON users.id=soldStocks.user_id 
                      WHERE soldStocks.user_id = ?;`;
const tradingHistoryByUser = `SELECT ownedStocks.user_id, users.username, ownedStocks.symbol, ownedStocks.purchase_price,  
                      soldStocks.sell_price FROM soldStocks INNER JOIN ownedStocks ON ownedStocks.user_id = soldStocks.user_id 
                      INNER JOIN users ON ownedStocks.user_id = users.id 
                      WHERE users.id =?;`;
const tradingHistoryBySymbol = `SELECT soldStocks.id AS stock_ID, ownedStocks.user_id, users.username, ownedStocks.symbol, ownedStocks.purchase_price,  
                                soldStocks.sell_price FROM soldStocks INNER JOIN ownedStocks ON ownedStocks.user_id = soldStocks.user_id 
                                INNER JOIN users ON ownedStocks.user_id = users.id 
                                WHERE ownedStocks.symbol = ? AND users.id =?
                                GROUP BY ownedStocks.id;`;

module.exports = {
  userInfo,
  updateBuyBalance,
  updateSellBalance,
  getUserInfo,
  getBalance,
  saveStock,
  getSavedStock,
  buyStocks,
  getOwnedStocks,
  sellStocks,
  getSoldStocks,
  tradingHistoryByUser,
  tradingHistoryBySymbol,
};
