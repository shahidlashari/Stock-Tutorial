import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip, Nav } from 'react-bootstrap';
import CurrencyExchangeRate from '../TrendingFormCurrencyExchange';
import ForeignMonthly from '../TrendingFormForexMonthly';

class TrendingCardForex extends Component {
  state = {
    forexActiveKey: '#currencyExchange',
  };

  handleForexSelect = (selectedKey) => {
    this.setState({ forexActiveKey: selectedKey });
  }

  render() {
    return (
      <Card>
        <Card.Header className="forex-header">
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id={'tooltip-top'}>
                Realtime exchange rate for any pair of digital currency (Ex:
                Bitcoin) and physical currency (Ex: USD), and Monthly time series of the specified FX currency pair
              </Tooltip>
            }
          >
            <Card.Title>Foreign Exchange Rates (Forex)</Card.Title>
          </OverlayTrigger>

          <Nav variant="tabs" defaultActiveKey={this.state.forexActiveKey} onSelect={this.handleForexSelect}>
            <Nav.Item>
              <Nav.Link href="#currencyExchange">Currency Exchange</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#forexMonthly">Forex Monthly</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Card.Text>
            {this.state.forexActiveKey === '#currencyExchange' ? <CurrencyExchangeRate handleCurrencySubmit={this.props.handleCurrencySubmit} /> : <ForeignMonthly handleForexMonthlySubmit={this.props.handleForexMonthlySubmit} />}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TrendingCardForex;
