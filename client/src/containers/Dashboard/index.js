import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Card, FormControl } from 'react-bootstrap';
import axios from 'axios';
import RenderStockList from '../RenderStockList';
import Wrapper from '../../components/Wrapper';
import './style.css';

class Dashboard extends Component {
  state = {
    stocks: [],
    savedStock: '',
    stockInput: '',
    currentUser: {},
    // eslint-disable-next-line react/no-unused-state
    isStock: false,
    // eslint-disable-next-line react/no-unused-state
    // dash: [],
    // username: '',
    // budget: '',
    // stocksearch: ''
  }

  componentDidMount() {
    // console.log(this.props.history);

    const newUser = this.props.history.location.state && this.props.history.location.state.newUser
      ? this.props.history.location.state.newUser
      : JSON.parse(localStorage.getItem('currentStockBroker'));

    this.setState({
      currentUser: newUser,
    });
    // console.log(newUser);
  }

  // async componentDidMount() {
  //   console.log(inputSymbol);

  //   try {
  //     const inputSymbol = this.state.stockInput
  //     const { data: { bestMatches } } = await axios.get('/api/stocks');
  //     let stocks = [...this.state.stocks, ...bestMatches];
  //     // console.log(bestMatches);
  //     this.setState({ stocks });
  //     // console.log(stocks);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  handleSaveStockSubmit = async (symbol) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ symbol: this.props.symbol });
    try {
      const [data] = await axios.get(`/api/stocks/show?q=${symbol}`);
      // const { data } = await axios.get(`/api/stocks/show${symbol}`);
      console.log(data);
      // const priceStock = [...this.state.priceStock, data];
      // this.setState({ priceStock});
      this.setState({ savedStock: data, isStock: true });
      // console.log(priceStock);
    } catch (e) {
      console.log(e);
    }
  };
  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h4>No Stock yet</h4>;
    } else {
      return this.state.stocks.map((stock) => {

        return <RenderStockList

          key={stock['1. symbol']}
          symbol={stock['1. symbol']}
          name={stock['2. name']}
          region={stock['4. region']}
          matchscore={stock['9. matchScore']}
          currency={stock['8. currency']}
          handleSubmit={this.handleSubmit}
          handleSaveStockSubmit={this.handleSaveStockSubmit}
        // openprice={this.state.priceStock[5]}
        />;
      });
    }
  }

  handleStockInputChange = (event) => {
    this.setState({ stockInput: event.target.value });
  }

  handleStockSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const inputSymbol = this.state.stockInput;
      // console.log(inputSymbol);
      const { data: { bestMatches } } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      // console.log(data);
      const stocks = [...this.state.stocks, ...bestMatches];
      // console.log(bestMatches);
      this.setState({ stocks });
      this.setState({ stocks, stockInput: '' });
      // renderStockListItems()
    } catch (err) {
      console.log(err);
    }
  }

  navigateAway() {
    // settimeout function
    // that will display some alert or error
    // then after a couple second, call history.push
    this.props.history.push('/');
  }

  render() {
    if (!this.state.currentUser && !this.props.history.location.state && !localStorage.getItem('currentStockBroker')) {
      return (
        <div>
          {this.navigateAway()}
        </div>
      );
    } else {
      // console.log(this.state.stocks)
      return (
        <Wrapper>
          <Container fluid>
            <Row>
              <Col md={4}>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>User Informations </Card.Title>
                    <Card.Text>
                      ID: {this.state.currentUser.id}
                      <br />
                      Username: {this.state.currentUser.username}
                      <br />
                      Email: {this.state.currentUser.email}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>
                      User's Budget: ${this.state.budget}
                    </Card.Title>
                    <Card.Text>This shows the user's budget for trading!</Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>Stock Watchlist</Card.Title>
                    <Card.Text key="savedStocks">
                      {this.state.isStock && (
                      <div>
                        <p>Symbol: {this.state.savedStock.symbol}</p>
                        <p>Date: {this.state.savedStock.date}</p>
                        <p>Price: {this.state.savedStock.price}</p>
                      </div>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <br />
              <Col md={8}>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>Stock Search</Card.Title>
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={this.state.stockInput}
                        onChange={this.handleStockInputChange}
                      />
                      <Button variant="outline-info" onClick={(e) => this.handleStockSearchSubmit(e)}>Search</Button>
                    </Form>
                    <br />
                    <h3>Stock List</h3>
                    {this.renderStockListItems()}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      );
    }
  }
}
export default withRouter(Dashboard);
