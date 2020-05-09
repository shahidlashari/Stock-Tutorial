// recent
const userInfo = 'INSERT INTO users SET ?;';
const getUserInfo = 'SELECT * FROM users WHERE id=?;';
const saveStock = 'INSERT INTO savedStocks SET ?;';
const getSavedStock = `select users.name, savedStocks.user_id, savedStocks.symbol, savedStocks.price, savedStocks.date_api from savedStocks 
                      inner join users on users.id=savedStocks.user_id 
                      where savedStocks.user_id = ?;`;
const buyStocks = 'INSERT INTO ownedStocks SET ?;';
const getOwnedStocks = `select users.name, ownedStocks.user_id, ownedStocks.symbol, ownedStocks.purchase_price, ownedStocks.date_api from ownedStocks 
                      inner join users on users.id=ownedStocks.user_id 
                      where ownedStocks.user_id = ?;`;
const sellStocks = 'INSERT INTO soldStocks SET ?;';
const getSoldStocks = `select users.name, soldStocks.user_id, soldStocks.symbol, soldStocks.sell_price, soldStocks.date_api from soldStocks 
                      inner join users on users.id=soldStocks.user_id 
                      where soldStocks.user_id = ?;`;
const tradingHistoryByUser = `select ownedStocks.user_id, users.name, ownedStocks.symbol, ownedStocks.purchase_price,  
                      soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id 
                      inner join users on ownedStocks.user_id = users.id 
                      where users.id =?;`;
const tradingHistoryBySymbol = `select soldStocks.id as stock_ID, ownedStocks.user_id, users.name, ownedStocks.symbol, ownedStocks.purchase_price,  
                                soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id 
                                inner join users on ownedStocks.user_id = users.id 
                                where ownedStocks.symbol = ? and users.id =?
                                group by ownedStocks.id;`;

// previous queries
// const postStock = 'INSERT INTO stocks SET ?;';
// const getStock = 'SELECT * FROM stocks;';
// const deleteStock = 'DELETE FROM stocks WHERE symbol = ?;';
// const buyStock = `update stocks set purchase_price = ? where symbol = ?;`;
// const sellStock = 'update stocks set sell_price = ? where symbol = ?;';

module.exports = {
  // postStock,
  // getStock,
  // deleteStock,
  // buyStock,
  // sellStock,
  userInfo,
  getUserInfo,
  saveStock,
  getSavedStock,
  buyStocks,
  getOwnedStocks,
  sellStocks,
  getSoldStocks,
  tradingHistoryByUser,
  tradingHistoryBySymbol,
};
