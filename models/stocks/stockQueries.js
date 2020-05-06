// Get todos

// Add stocks
const postStock = 'INSERT INTO stocks SET ?;';
const getStock = 'SELECT * FROM stocks;';
const deleteStock = 'DELETE FROM stocks WHERE symbol = ?;';
const buyStock = `update stocks set purchase_price = ? where symbol = ?;`;
const sellStock = 'update stocks set sell_price = ? where symbol = ?;';


// Deleting todos

// Updating todos

module.exports = {
  postStock,
  getStock,
  deleteStock,
  buyStock,
  sellStock,
};
