const connection = require('../config/connection');
const stockQueries = require('../models/stocks/stockQueries');
const axios = require('axios');

const saveDatabase = async (symbol, price, date_api, user_id) => {
  try{
    await connection.query(stockQueries.saveStock, {symbol, price, date_api, user_id});
  } catch (e){

    if (e) throw e;
  }
};

const buyStock = async (symbol, purchase_price, date_api, user_id) => {
  try{
    await connection.query(stockQueries.buyStocks, {symbol, purchase_price, date_api, user_id});
  }catch(e){
    console.log(error);
  }
};

const sellStock = async(symbol, sell_price, date_api, user_id) => {
  try{
    await connection.query(stockQueries.sellStocks, {symbol, sell_price, date_api, user_id});
  }catch(e){
    if(e) throw e;
  }
};
module.exports = {

  userInfo: async (req, res) => {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    
    try {
     const insertedUser= await connection.query(stockQueries.userInfo, {username, email, password});
     console.log(insertedUser);
    //  const {newUser} = await connection.query(stockQueries.getUserInfo, insertedUser.id);
    //   console.log(newUser);
     //get newUser by insertedUser id from DB and res.json with newUser
      return res.status(200).json(insertedUser);
    } catch (e) {
      if (e) throw e;
    }
  },
  getUserInfo: async (req, res) => {
    const { id } = req.body;
    try {
      const [newUser] = await connection.query(stockQueries.getUserInfo, id);
      return res.status(200).json(newUser);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getSavedStock: async (req, res) => {
    const { user_id } = req.body;
    try {
      const [stocks] = await connection.query(
        stockQueries.getSavedStock,
        user_id
      );
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getStock: async (req, res) => {
    // console.log(req.query);
    const { q: stockSymbol } = req.query;
    try {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`
      );
      const dateRaw = data["Meta Data"]["3. Last Refreshed"];
      const dateArray = dateRaw.split(/(\s+)/);
      const date = dateArray[0];
      const priceOpen = data["Time Series (Daily)"][date]["1. open"];
      const priceHigh = data["Time Series (Daily)"][date]["2. high"];
      const priceLow = data["Time Series (Daily)"][date]["3. low"];
      const priceClose = data["Time Series (Daily)"][date]["4. close"];
      res
        .status(200)
        .json({ date, priceOpen, priceHigh, priceLow, priceClose });
        
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  postStock: async (req, res) => {
    try {
      const { stockSymbol } = req.body;
      const { user_id } = req.body;
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`
      );
      const symbol = data["Meta Data"]["2. Symbol"];
      const dateRaw = data["Meta Data"]["3. Last Refreshed"];
      const dateArray = dateRaw.split(/(\s+)/);
      const date = dateArray[0];
      const price = data["Time Series (Daily)"][date]["1. open"];
      saveDatabase(symbol, price, date, user_id);
      res.status(200).json(`USER ID: ${user_id} has added ${symbol} to watchlist on ${date}`);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  getApiStock: async (req, res) => {
    const { q: inputSymbol } = req.query;
    try {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`
      );

      res.status(200).json(data);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  buyStocks: async (req, res) => {
    const { stockSymbol } = req.body;
    const { user_id } = req.body;
    try {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`
      );
      const symbol = data["Meta Data"]["2. Symbol"];
      const dateRaw = data["Meta Data"]["3. Last Refreshed"];
      const dateArray = dateRaw.split(/(\s+)/);
      const date = dateArray[0];
      const price = data["Time Series (Daily)"][date]["1. open"];
      buyStock(symbol, price, date, user_id);
      // const [updatedStock] = await connection.query(stockQueries.getOwnedStocks);
      res.status(200).json({ symbol, price, date, user_id });
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  getOwnedStock: async (req, res) => {
    const { user_id } = req.body;
    try {
      const [stocks] = await connection.query(
        stockQueries.getOwnedStocks,
        user_id
      );
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  sellStocks: async (req, res) => {
    const { stockSymbol } = req.body;
    const { user_id } = req.body;
    try {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=4EOUWW7RMTJ1A28A`
      );
      const symbol = data["Meta Data"]["2. Symbol"];
      const dateRaw = data["Meta Data"]["3. Last Refreshed"];
      const dateArray = dateRaw.split(/(\s+)/);
      const date = dateArray[0];
      const price = data["Time Series (Daily)"][date]["4. close"];
      sellStock(symbol, price, date, user_id);
      // const [updatedStock] = await connection.query(stockQueries.getStock);
      res.status(200).json({ symbol, price, date, user_id });
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  getSoldStock: async (req, res) => {
    const { user_id } = req.body;
    try {
      const [stocks] = await connection.query(
        stockQueries.getSoldStocks,
        user_id
      );
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTrading: async (req, res) => {
    const { user_id } = req.body;
    try {
      const [stocks] = await connection.query(
        stockQueries.tradingHistoryByUser,
        user_id
      );
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTradingBySymbol: async (req, res) => {
    const { stockSymbol } = req.body;
    const { user_id } = req.body;
    try {
      const [
        stocks,
      ] = await connection.query(stockQueries.tradingHistoryBySymbol, [
        stockSymbol,
        user_id,
      ]);
      return res.status(200).json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};