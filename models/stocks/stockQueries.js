// recent
const userInfo = 'INSERT INTO users SET ?;';
const updateBuyBalance = 'UPDATE users SET initial_budget = (initial_budget - ?) where id = ?;';
const updateSellBalance = 'UPDATE users SET initial_budget = (initial_budget + ?) where id = ?;';
const getUserInfo = 'SELECT * FROM users WHERE id=?;';
const getBalance = 'SELECT initial_budget FROM users WHERE id = ?;';
const saveStock = 'INSERT INTO savedStocks SET ?;';
const getSavedStock = `select users.username, savedStocks.user_id, savedStocks.symbol, savedStocks.price, savedStocks.date_api from savedStocks 
                      inner join users on users.id=savedStocks.user_id 
                      where savedStocks.user_id = ? group by savedStocks.symbol;`;
const buyStocks = 'INSERT INTO ownedStocks SET ?;';
const getOwnedStocks = `select users.username, ownedStocks.user_id, ownedStocks.symbol, ownedStocks.purchase_price, ownedStocks.date_api from ownedStocks 
                      inner join users on users.id=ownedStocks.user_id 
                      where ownedStocks.user_id = ?;`;
const sellStocks = 'INSERT INTO soldStocks SET ?;';
const getSoldStocks = `select users.username, soldStocks.user_id, soldStocks.symbol, soldStocks.sell_price, soldStocks.date_api from soldStocks 
                      inner join users on users.id=soldStocks.user_id 
                      where soldStocks.user_id = ?;`;
const tradingHistoryByUser = `select ownedStocks.user_id, users.username, ownedStocks.symbol, ownedStocks.purchase_price,  
                      soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id 
                      inner join users on ownedStocks.user_id = users.id 
                      where users.id =?;`;
const tradingHistoryBySymbol = `select soldStocks.id as stock_ID, ownedStocks.user_id, users.username, ownedStocks.symbol, ownedStocks.purchase_price,  
                                soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id 
                                inner join users on ownedStocks.user_id = users.id 
                                where ownedStocks.symbol = ? and users.id =?
                                group by ownedStocks.id;`;

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
