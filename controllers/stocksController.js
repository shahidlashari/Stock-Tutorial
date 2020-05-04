const connection = require('../config/connection');
const stockQueries = require('../models/stocks/stockQueries');
const axios = require('axios');
module.exports = {

  getAllStock: async (req, res) => {

    try {
      const {data}  = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=4EOUWW7RMTJ1A28A`);
      console.log(data[1]);
      res.status(200).json(data);
      // console.log(data.MetaData);
      // const newStock = data.map(stock => { price: stock.open, symbol: stock.symbol });

      // [{ price, symbol }]
      // for (let i = 0; i < newStock.length; i++) {
      //   const [[myData]] = await connection.query(stockQueries.postStock);
      //   res.status(200).json(myData[0]);
      // }
    } catch (e) {
        res.status(403).json({ e });
      }
    }
  };

