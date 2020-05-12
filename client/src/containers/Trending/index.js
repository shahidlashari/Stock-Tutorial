import React, { Component } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import TrendingCardStock from '../TrendingCardStock';
import TrendingCardForex from '../TrendingCardForex';
import TrendingCardCrypto from '../TrendingCardCrypto';
import TrendingCardResultChart from '../../components/TrendingCardResultChart';
import TrendingCardResultText from '../../components/TrendingCardResultText';
import './style.css';

class Trending extends Component {
  state = {
    data: [],
    isStock: false,
    isCurrency: false,
    isForex: false,
    isCrypto: false,
    isDigital: false,
    isErrorStockAPI: false,
    isErrorCurrencyAPI: false,
    isErrorForexAPI: false,
    isErrorCryptoAPI: false,
    isErrorDigitalAPI: false,
  }

  // Timer to make API Error text disappear after 6 seconds
  componentDidUpdate() {
    if (this.state.isErrorStockAPI === true) {
      setTimeout(() => this.setState({ isErrorStockAPI: false }), 6000);
    } else if (this.state.isErrorCurrencyAPI === true) {
      setTimeout(() => this.setState({ isErrorCurrencyAPI: false }), 6000);
    } else if (this.state.isErrorForexAPI === true) {
      setTimeout(() => this.setState({ isErrorForexAPI: false }), 6000);
    } else if (this.state.isErrorCryptoAPI === true) {
      setTimeout(() => this.setState({ isErrorCryptoAPI: false }), 6000);
    } else {
      setTimeout(() => this.setState({ isErrorDigitalAPI: false }), 6000);
    }
  }

  // Stock Time Series: Time Series Monthly Submit Button
  handleStockSubmit = async (inputStock) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false,
        isErrorStockAPI: false, isErrorCurrencyAPI: false, isErrorForexAPI: false, isErrorCryptoAPI: false, isErrorDigitalAPI: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${inputStock}&apikey=${process.env.APIKEY}`);

      if (data['Error Message']) {
        this.setState({ isErrorStockAPI: true });
      } else {
        this.setState({ data, isStock: true });
      }
    } catch (e) {
      if (e) throw e;
    }
  };

  // Foreign Exchange Rates: Currency Exchange Rate Submit Button
  handleCurrencySubmit = async (inputCurrencyFrom, inputCurrencyTo) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false,
        isErrorStockAPI: false, isErrorCurrencyAPI: false, isErrorForexAPI: false, isErrorCryptoAPI: false, isErrorDigitalAPI: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${inputCurrencyFrom}&to_currency=${inputCurrencyTo}&apikey=${process.env.APIKEY}`);

      if (data['Error Message']) {
        this.setState({ isErrorCurrencyAPI: true });
      } else {
        this.setState({ data, isCurrency: true });
      }
    } catch (e) {
      if (e) throw e;
    }
  }

  // Foreign Exchange Rates: Forex Monthly Submit Button
  handleForexMonthlySubmit = async (inputForexFrom, inputForexTo) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false,
        isErrorStockAPI: false, isErrorCurrencyAPI: false, isErrorForexAPI: false, isErrorCryptoAPI: false, isErrorDigitalAPI: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${inputForexFrom}&to_symbol=${inputForexTo}&apikey=${process.env.APIKEY}`);

      if (data['Error Message']) {
        this.setState({ isErrorForexAPI: true });
      } else {
        this.setState({ data, isForex: true });
      }
    } catch (e) {
      if (e) throw e;
    }
  }

  // Cryptocurrencies: Cryptorating Submit Button
  handleCryptoSubmit = async (inputCrypto) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false,
        isErrorStockAPI: false, isErrorCurrencyAPI: false, isErrorForexAPI: false, isErrorCryptoAPI: false, isErrorDigitalAPI: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=${inputCrypto}&apikey=${process.env.APIKEY}`);

      if (Object.keys(data).length === 0) {
        this.setState({ isErrorCryptoAPI: true });
      } else {
        this.setState({ data, isCrypto: true });
      }
    } catch (e) {
      if (e) throw e;
    }
  };

  // Cryptocurrencies: Digital Monthly Submit Button
  handleDigitalMonthlySubmit = async (inputDigitalCurrency, inputPhysicalMarket) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false,
        isErrorStockAPI: false, isErrorCurrencyAPI: false, isErrorForexAPI: false, isErrorCryptoAPI: false, isErrorDigitalAPI: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${inputDigitalCurrency}&market=${inputPhysicalMarket}&apikey=${process.env.APIKEY}`);

      if (data['Error Message']) {
        this.setState({ isErrorDigitalAPI: true });
      } else {
        this.setState({ data, isDigital: true });
      }
    } catch (e) {
      if (e) throw e;
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <CardDeck className="card-deck">
              <Col large={4} md={4} sm={12} xs={12} className="stock-card">
                <TrendingCardStock
                  handleStockSubmit={this.handleStockSubmit}
                  isErrorStockAPI={this.state.isErrorStockAPI}
                />
              </Col>

              <Col large={4} md={4} sm={12} xs={12} className="forex-card">
                <TrendingCardForex
                  handleCurrencySubmit={this.handleCurrencySubmit}
                  handleForexMonthlySubmit={this.handleForexMonthlySubmit}
                  isErrorCurrencyAPI={this.state.isErrorCurrencyAPI}
                  isErrorForexAPI={this.state.isErrorForexAPI}
                />
              </Col>

              <Col large={4} md={4} sm={12} xs={12} className="crypto-card">
                <TrendingCardCrypto
                  handleCryptoSubmit={this.handleCryptoSubmit}
                  handleDigitalMonthlySubmit={this.handleDigitalMonthlySubmit}
                  isErrorCryptoAPI={this.state.isErrorCryptoAPI}
                  isErrorDigitalAPI={this.state.isErrorDigitalAPI}
                />
              </Col>
            </CardDeck>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              {this.state.isStock ? <TrendingCardResultChart isStock={this.state.isStock} data={this.state.data} /> : null}
              {this.state.isCurrency ? <TrendingCardResultText isCurrency={this.state.isCurrency} data={this.state.data} /> : null}
              {this.state.isForex ? <TrendingCardResultChart isForex={this.state.isForex} data={this.state.data} /> : null}
              {this.state.isCrypto ? <TrendingCardResultText isCrypto={this.state.isCrypto} data={this.state.data} /> : null}
              {this.state.isDigital ? <TrendingCardResultChart isDigital={this.state.isDigital} data={this.state.data} /> : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Trending;
