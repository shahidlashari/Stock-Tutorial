import React, { Component } from 'react';

class TrendingTextCurrency extends Component {
  state = {
    textFromCurrencyCode: '',
    textFromCurrencyName: '',
    textToCurrencyCode: '',
    textToCurrencyName: '',
    textExchangeRate: '',
    textLastRefreshed: '',
  }

  componentDidMount() {
    const fromCurrencyCode = this.props.data['Realtime Currency Exchange Rate']['1. From_Currency Code'];
    const fromCurrencyName = this.props.data['Realtime Currency Exchange Rate']['2. From_Currency Name'];
    const toCurrencyCode = this.props.data['Realtime Currency Exchange Rate']['3. To_Currency Code'];
    const toCurrencyName = this.props.data['Realtime Currency Exchange Rate']['4. To_Currency Name'];
    const exchangeRate = this.props.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    const lastRefreshed = this.props.data['Realtime Currency Exchange Rate']['6. Last Refreshed'];

    this.setState({
      textFromCurrencyCode: fromCurrencyCode,
      textFromCurrencyName: fromCurrencyName,
      textToCurrencyCode: toCurrencyCode,
      textToCurrencyName: toCurrencyName,
      textExchangeRate: exchangeRate,
      textLastRefreshed: lastRefreshed,
    });
  }

  render() {
    return (
      <div>
        <p style={{ fontSize: '36px' }}>{this.state.textFromCurrencyCode} ({this.state.textFromCurrencyName}) to {this.state.textToCurrencyCode} ({this.state.textToCurrencyName})</p>
        <p style={{ fontSize: '28px' }}>Exchange Rate: <strong>{this.state.textExchangeRate}</strong></p>
        <p style={{ fontSize: '16px' }}>Last Refreshed: <strong>{this.state.textLastRefreshed}</strong></p>
      </div>
    );
  }
}

export default TrendingTextCurrency;
