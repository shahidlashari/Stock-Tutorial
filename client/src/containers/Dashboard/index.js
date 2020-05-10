import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Card, FormControl } from 'react-bootstrap';
import axios from 'axios';
import Wrapper from '../../components/Wrapper';
import RenderStockList from '../RenderStockList';
import RenderWatchList from '../RenderWatchList';
import './style.css';

class Dashboard extends Component {
  state = {
    stocks: [],
    savedStock: [],
    stockInput: '',
    currentUser: {},
    isStock: false,
    isWatchList: false,
    // eslint-disable-next-line react/no-unused-state
    balance: [],
    // isErrorNoUser: false,
  }

  // eslint-disable-next-line react/sort-comp
  async componentDidMount() {
    const newUser = this.props.history.location.state && this.props.history.location.state.newUser
      ? this.props.history.location.state.newUser
      : JSON.parse(localStorage.getItem('currentStockBroker'));
    this.setState({
      currentUser: newUser,
    });
  }


  // eslint-disable-next-line react/sort-comp
  logOut() {
    localStorage.clear('currentStockBroker');
    this.props.history.push('/');
  }

  handleStockInputChange = (event) => {
    this.setState({ stockInput: event.target.value });
  }

  handleStockSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({ stocks: [] });
      const inputSymbol = this.state.stockInput;
      const { data: { bestMatches } } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      const stocks = [...this.state.stocks, ...bestMatches];
      this.setState({ stocks, stockInput: '' });
      const user_id = this.state.currentUser.id;
      const { data } = await axios.get(`/api/stocks/save?q=${user_id}`);
      console.log(data);
      this.setState({ savedStock: data, isWatchList: true });
    } catch (err) {
      console.log(err);
    }
  }

  handleSaveStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;
    console.log(user_id);
    console.log(stockSymbol);
    try {
      await axios.post('/api/stocks/save', {
        stockSymbol,
        user_id,
      });
      const { data: stockByID } = await axios.get(`/api/stocks/save?q=${user_id}`);
      console.log(stockByID);
      this.setState({ savedStock: stockByID, isStock: true, isWatchList: true });
      console.log(this.state.savedStock);
      this.setState({ isStock: true });
    } catch (e) {
      console.log(e);
    }
  };

  handleBuyStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;
    console.log(symbol);
    console.log(user_id);
    try {
      const { data } = await axios.post('/api/stocks/buy', { stockSymbol, user_id });
      const newBalance = data.balance[0][0].initial_budget;
      this.setState({ balance: newBalance });
    } catch (error) {
      console.log(error);
    }
  }

  handleSellStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;
    try {
      const { data } = await axios.post('/api/stocks/sell', { stockSymbol, user_id });
      const newBalance = data.balance[0][0].initial_budget;
      this.setState({ balance: newBalance });
    } catch (error) {
      console.log(error);
    }
  }

  // handleWatchList = async () => {
  //   try {
  //     if (this.state.savedStock.length === 0) {
  //       return;
  //     } else {
  //       const user_id = this.state.currentUser.id;
  //       const { data: stockFromID } = await axios.get(`/api/stocks/save?q=${user_id}`);
  //       console.log(stockFromID);
  //       this.setState({ savedStock: stockFromID, isWatchList: true });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h4>No Stock yet</h4>;
    } else {
      return this.state.stocks.map((stock) => {
        return <RenderStockList
          key={stock['1. symbol']}
          symbol={stock['1. symbol']}
          name={stock['2. name']}
          priceStock={this.state.priceStock}
          handleSaveStockSubmit={this.handleSaveStockSubmit}
          isStock={this.state.isStock}
        />;
      });
    }
  }

  renderWatchListItems = () => {
    if (this.state.savedStock.length === 0) {
      return <h4>No Stock(s) in Watchlist yet</h4>;
    } else {
      return this.state.savedStock.map((stock) => {
        console.log(stock['symbol']);
        return <RenderWatchList
          key={stock['symbol']}
          symbol={stock['symbol']}
          price={stock['price']}
          handleBuyStockSubmit={this.handleBuyStockSubmit}
          handleSellStockSubmit={this.handleSellStockSubmit}
          isWatchList={this.state.isWatchList}

        />;
      });
    }
  }

  navigateAway() {
    // settimeout function
    // that will display some alert or error
    // then after a couple second, call history.push
    // this.setState({ isErrorNoUser: true });
    alert('Please create an account to access Dashboard!');
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
      return (
        <Wrapper>
          <Container>
            <Row>
              <Col md={4}>
                <Card bg="light" border="dark" className="dashboard-user-card">
                  <Card.Body>
                    <Card.Title>User Information </Card.Title>
                    <Card.Text>
                      ID: {this.state.currentUser.id}
                      <br />
                      Username: {this.state.currentUser.username}
                      <br />
                      Email: {this.state.currentUser.email}
                      <br />
                      <Button variant="outline-info" onClick={(e) => this.logOut(e)}>Log Out</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="dark" className="dashboard-budget-card">
                  <Card.Body>
                    <Card.Title>
                      User's Initial Budget: ${this.state.currentUser.initial_budget}
                    </Card.Title>
                    <Card.Text>
                      <div>

                        User's Balance: ${this.state.balance}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="dark" className="dashboard-watchlist-card">
                  <Card.Body>
                    <Card.Title>Stock Watchlist</Card.Title>
                    <Card.Text key="savedStocks">
                      {this.renderWatchListItems()}
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
