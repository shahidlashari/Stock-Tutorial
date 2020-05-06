const connection = require('../config/connection');
const stockQueries = require('../models/stocks/stockQueries');
const axios = require('axios');

const saveDatabase = async (symbol, price, date_api) => {
  try{
    await connection.query(stockQueries.postStock, {symbol, price, date_api});
  } catch (e){
    if (e) throw e;
  }
};

module.exports = {
  getStock: async (req, res) => {
    try {
      const [stocks] = await connection.query(stockQueries.getStock);
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  postStock: async (req, res) => {
    try {
      const { stockSymbol } = req.body;
      const {data}  = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      console.log(data);
      console.log(Object.keys(data["Time Series (Daily)"]));
      const symbol = data["Meta Data"]["2. Symbol"];
      const price = data["Time Series (Daily)"]["2020-05-04"]["2. open"];
      const date = data["Meta Data"][ "3. Last Refreshed"];
      saveDatabase(symbol, price, date);
      console.log(date);
      res.status(200).json({symbol, price});
    } catch (e) {
        res.status(403).json({ e });
      }
    },
  getApiStock: async (req, res) => {
    // let allArrays = [];
    try {
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=4EOUWW7RMTJ1A28A`);
      console.log(data);
      
      // // data.bestMatches.forEach(item => {
      //   let dataToSave = [
      //     item['1. symbol'],
      //     item['2. name'],
      //     item['4. region'],
      //     item['5. marketOpen'],
      //     item['6. marketClose'],
      //     item['7. timezone'],
      //     item['8. currency']
         
      //   ]
        // allArrays.push(dataToSave)
        // allArrays.push(data)        
        // console.log(allArrays);
      // })
        res.status(200).json(data);
    } catch (e) {
        res.status(403).json({ e });
    }
  }
};

