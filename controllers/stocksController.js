const connection = require('../config/connection');
const stockQueries = require('../models/stocks/stockQueries');
const axios = require('axios');

const saveDatabase = async (symbol, price, date) => {
  await connection.query(stockQueries.postStock, {symbol, price, date});
}
module.exports = {
  // getAllstock: async (req, res) => {
  //   try {
  //     const [stocks] = await connection.query(stockQueries.getStock);
  //     return res.status(200).json(stocks);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
  postStock: async (req, res) => {
    try {
      const {data}  = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=4EOUWW7RMTJ1A28A`);
      const symbol = data["Meta Data"][ "2. Symbol"];
      const price = data["Time Series (Daily)"]["2020-05-04"]["2. high"];
      const date = data["Meta Data"][ "3. Last Refreshed"];
      saveDatabase(symbol, price, date);
      res.status(200).json({symbol, price});
    } catch (e) {
        res.status(403).json({ e });
      }
    },

  };

