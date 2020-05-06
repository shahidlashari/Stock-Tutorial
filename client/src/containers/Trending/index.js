import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Card, Form, Button, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import CurrencyExchangeRate from '../../components/CurrencyExchangeRate';
import ForeignMonthly from '../../components/ForeignMonthly';
import Cryptorating from '../../components/CryptoRating';
import DigitalMonthly from '../../components/DigitalMonthly';
import './style.css';
import axios from 'axios';

class Trending extends Component {
  state = {
    forexActiveKey: '#currencyExchange',
    cryptoActiveKey: '#cryptorating',
    stockInput: '',
    result: ''
  }

  handleForexSelect = selectedKey => {
    this.setState({forexActiveKey: selectedKey});
  }

  handleCryptoSelect = selectedKey => {
    this.setState({cryptoActiveKey: selectedKey});
  }

  handleStockInputChange = event => {
    this.setState({ stockInput: event.target.value });
  }

  handleStockSubmit = async event => {
    event.preventDefault();
    try {
      const inputSymbol = this.state.stockInput
      console.log(inputSymbol);
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${inputSymbol}&apikey=MN608K5DXF6IBFAL`)
      console.log(data);
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <CardDeck className="card-deck">
              <Col large={4} md={4} sm={12} xs={12} className="stock-card" >
                <Card>
                  <Card.Header className="stock-header">
                    <OverlayTrigger key='top' placement='top' overlay= {
                      <Tooltip id={'tooltip-top'}>
                        Realtime and historical global equity data by Monthly time series
                      </Tooltip>
                    }>
                    <Card.Title>Stock Time Series</Card.Title>
                    </OverlayTrigger>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Form>
                        <Form.Group controlId="formStockSymbol">
                          <Form.Label>Time Series Monthly</Form.Label>
                          <Form.Control  value={this.state.stockInput} onChange={this.handleStockInputChange} type="text" placeholder="Enter stock symbol" />
                          <Form.Text className="text-muted">
                            Ex: FB (Facebook), AMZN (Amazon), MSFT (Microsoft), etc.
                          </Form.Text>
                        </Form.Group>
                        <Button onClick={ (e) => this.handleStockSubmit(e) } variant="dark" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>  
              </Col>
              <Col large={4} md={4} sm={12} xs={12} className='forex-card' >
                <Card>
                  <Card.Header className="forex-header">
                    <OverlayTrigger key='top' placement='top' overlay= {
                      <Tooltip id={'tooltip-top'}>
                        Realtime exchange rate for any pair of digital currency (Ex: Bitcoin) and physical currency (Ex: USD)
                      </Tooltip>
                    }>
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
                      {this.state.forexActiveKey === '#currencyExchange' ? <CurrencyExchangeRate/> : <ForeignMonthly/>}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col large={4} md={4} sm={12} xs={12} className='crypto-card' >
                <Card>
                  <Card.Header className="crypto-header">
                    <OverlayTrigger key='top' placement='top' overlay= {
                      <Tooltip id={'tooltip-top'}>
                        Crytpo-rating to assess the health index of crypto projects and Monthly historical time series for a digital currency (Ex: BTC) traded on a specific market 
                      </Tooltip>
                    }>
                    <Card.Title>Cryptocurrencies</Card.Title>
                  </OverlayTrigger> 
                  <Nav variant="tabs" defaultActiveKey={this.state.cryptoActiveKey} onSelect={this.handleCryptoSelect}>
                    <Nav.Item>
                      <Nav.Link href="#cryptorating">Cryptorating</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#digitalMonthly">Digital Monthly</Nav.Link>
                    </Nav.Item>
                  </Nav> 
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {this.state.cryptoActiveKey === "#cryptorating" ? <Cryptorating/> : <DigitalMonthly/>}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardDeck>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Card className="card-display">
                <Card.Header>
                  <Card.Title>Data Result</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> 
    )
  };
}

export default Trending;