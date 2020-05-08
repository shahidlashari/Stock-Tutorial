import React, { Component } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import TrendingCardStock from '../TrendingCardStock';
import TrendingCardForex from '../TrendingCardForex';
import TrendingCardCrypto from '../TrendingCardCrypto'; 
import TrendingCardChartResult from '../../components/TrendingCardChartResult';
import TrendingCardTextResult from '../../components/TrendingCardTextResult';
import './style.css';
import axios from 'axios';

class Trending extends Component {
  state = {
    data: [],
    isStock: false,
    isCurrency: false,
    isForex: false,
    isCrypto: false,
    isDigital: false
  }

  handleStockSubmit = async inputStock => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${inputStock}&apikey=MN608K5DXF6IBFAL`);
      console.log(data);
      this.setState({ data, isStock: true });
    } catch (err) {
      console.log(err);
    }
  };

  handleCurrencySubmit = async (inputCurrencyFrom, inputCurrencyTo) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${inputCurrencyFrom}&to_currency=${inputCurrencyTo}&apikey=MN608K5DXF6IBFAL`)
      console.log(data);
      this.setState({ data, isCurrency: true });
    } catch (err) {
      console.log(err);
    }
  }

  handleForexMonthlySubmit = async (inputForexFrom, inputForexTo) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${inputForexFrom}&to_symbol=${inputForexTo}&apikey=MN608K5DXF6IBFAL`)
      console.log(data);
      this.setState({ data, isForex: true });
    } catch (err) {
      console.log(err);
    }
  }

  handleCryptoSubmit = async inputCrypto => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=${inputCrypto}&apikey=MN608K5DXF6IBFAL`);
      console.log(data);
      this.setState({ data, isCrypto: true });
    } catch (err) {
      console.log(err);
    }
  };

  handleDigitalMonthlySubmit = async (inputDigitalCurrency, inputPhysicalMarket) => {
    try {
      this.setState({ isStock: false, isCurrency: false, isForex: false, isCrypto: false, isDigital: false });
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${inputDigitalCurrency}&market=${inputPhysicalMarket}&apikey=MN608K5DXF6IBFAL`)
      console.log(data);
      this.setState({ data, isDigital: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <CardDeck className='card-deck'>
              <Col large={4} md={4} sm={12} xs={12} className='stock-card'>
                <TrendingCardStock handleStockSubmit={this.handleStockSubmit}/>
              </Col>

              <Col large={4} md={4} sm={12} xs={12} className='forex-card'>
                <TrendingCardForex handleCurrencySubmit={this.handleCurrencySubmit} handleForexMonthlySubmit={this.handleForexMonthlySubmit}/>
              </Col>

              <Col large={4} md={4} sm={12} xs={12} className='crypto-card'>
                <TrendingCardCrypto handleCryptoSubmit={this.handleCryptoSubmit} handleDigitalMonthlySubmit={this.handleDigitalMonthlySubmit}/>
              </Col>
            </CardDeck>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
            {this.state.isStock ? <TrendingCardChartResult isStock={this.state.isStock} data={this.state.data}/> : null}
            {this.state.isCurrency ? <TrendingCardTextResult isCurrency={this.state.isCurrency} data={this.state.data}/> : null}
            {this.state.isForex ? <TrendingCardChartResult isForex={this.state.isForex} data={this.state.data}/> : null}
            {this.state.isCrypto ? <TrendingCardTextResult isCrypto={this.state.isCrypto} data={this.state.data}/> : null}
            {this.state.isDigital ? <TrendingCardChartResult isDigital={this.state.isDigital} data={this.state.data}/> : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Trending;