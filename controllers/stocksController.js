const connection = require('../config/connection');
const stockQueries = require('../models/stocks/stockQueries');
const axios = require('axios');

const saveDatabase = async (symbol, price, date_api) => {
  try {
    await connection.query(stockQueries.postStock, { symbol, price, date_api });
  } catch (e) {
    if (e) throw e;
  }
};

const buyStock = async (symbol, price) => {
  try {
    await connection.query(stockQueries.buyStock, [price, symbol]);
  } catch (e) {
    if (e) throw e;
  }
};

const sellStock = async (symbol, price) => {
  try {
    await connection.query(stockQueries.sellStock, [price, symbol]);
  } catch (e) {
    if (e) throw e;
  }
};
module.exports = {
  // getStock: async (req, res) => {
  //   try {
  //     const [stocks] = await connection.query(stockQueries.getStock);
  //     return res.status(200).json(stocks);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
  postStock: async (req, res) => {
    try {
      const { stockSymbol } = req.body;
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      console.log(data);
      console.log(Object.keys(data["Time Series (Daily)"]));
      const symbol = data["Meta Data"]["2. Symbol"];
      const dateRaw = data["Meta Data"]["3. Last Refreshed"];
      const dateArray = dateRaw.split(/(\s+)/);
      const date = dateArray[0];
      const price = data["Time Series (Daily)"][date]["1. open"];
      console.log(date);
      // console.log(object.keys(data["Time Series (Daily)"]));
      saveDatabase(symbol, price, date);
      res.status(200).json({ symbol, price, date });
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  // getApiStock: async (req, res) => {
  //   const { q: inputSymbol } = req.query;
  //   try {
  //     const { data } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
     
  //       res.status(200).json(data);
  //     } catch (e) {
  //       res.status(403).json({ e });
  //     }
  //   },
    getStock: async (req, res) => {
      const { q: inputSymbol} = req.query;
      try {
        const {data}  = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
           console.log(data);
        const dateRaw = data["Meta Data"][ "3. Last Refreshed"];
        const dateArray = dateRaw.split(/(\s+)/);
        const date = dateArray[0];
        const newSymbol = data["Meta Data"][ "2. Symbol"];
        const priceOpen = data["Time Series (Daily)"][date]["1. open"];
        const priceHigh = data["Time Series (Daily)"][date]["2. high"];
        const priceLow = data["Time Series (Daily)"][date]["3. low"];
        const priceClose= data["Time Series (Daily)"][date]["4. close"];
        res.status(200).json({ newSymbol, date, priceOpen, priceHigh, priceLow, priceClose});
      } catch (e) {
        res.status(403).json({ e });
      }
    },


    buyStocks: async (req, res) => {
      const { stockSymbol } = req.body;
      try {
        const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`);
        const symbol = data["Meta Data"]["2. Symbol"];
        const dateRaw = data["Meta Data"]["3. Last Refreshed"];
        const dateArray = dateRaw.split(/(\s+)/);
        const date = dateArray[0];
        const price = data["Time Series (Daily)"][date]["1. open"];
        await buyStock(symbol, price);
        const [updatedStock] = await connection.query(stockQueries.getStock);
        res.status(200).json(updatedStock);
      } catch (e) {
        res.status(403).json({ e });
      }
    },

      sellStocks: async (req, res) => {
        const { stockSymbol } = req.body;
        try {
          const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`);
          const symbol = data["Meta Data"]["2. Symbol"];
          const dateRaw = data["Meta Data"]["3. Last Refreshed"];
          const dateArray = dateRaw.split(/(\s+)/);
          const date = dateArray[0];
          const price = data["Time Series (Daily)"][date]["4. close"];
          sellStock(symbol, price);
          const [updatedStock] = await connection.query(stockQueries.getStock);
          res.status(200).json(updatedStock);
        } catch (e) {
          res.status(403).json({ e });
        }
      },
 };
