import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Form, Card, FormControl } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import DashboardStockList from '../DashboardStockList';
import DashboardWatchList from '../../components/DashboardWatchList';
import './style.css';

class Dashboard extends Component {
  state = {
    stocks: [],
    savedStock: [],
    stockInput: '',
    currentUser: {},
    isStock: false,
    isWatchList: false,
    balance: [],
  }

  // Uses this.props.history.location.state that is given from passing down Dashboard as a prop component from App/index.js
  // Sets this.props.history.location.state to newUser if conditions are true, else grabs 'currentStockBroker' from local storage
  // Sets currentUser state to the information stored in the newUser variable
  componentDidMount() {
    const newUser = this.props.history.location.state && this.props.history.location.state.newUser
      ? this.props.history.location.state.newUser
      : JSON.parse(localStorage.getItem('currentStockBroker'));

    this.setState({
      currentUser: newUser,
    });
  }

  handleStockInputChange = (event) => {
    this.setState({ stockInput: event.target.value });
  }

  // Stock Search Submit Button
  handleStockSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      this.setState({ stocks: [] });

      const inputSymbol = this.state.stockInput;
      const { data: { bestMatches } } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=${process.env.APIKEY}`);
      const stocks = [...this.state.stocks, ...bestMatches];
      this.setState({ stocks, stockInput: '' });

      // Conditional render for the stock watchlist
      const user_id = this.state.currentUser.id;
      const { data } = await axios.get(`/api/stocks/save?q=${user_id}`);
      this.setState({ savedStock: data, isWatchList: true });
    } catch (e) {
      if (e) throw e;
    }
  }

  // Save Stock Submit Button
  handleSaveStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;

    try {
      await axios.post('/api/stocks/save', {
        stockSymbol,
        user_id,
      });
      const { data: stockByID } = await axios.get(`/api/stocks/save?q=${user_id}`);
      this.setState({ savedStock: stockByID, isStock: true, isWatchList: true });
    } catch (e) {
      if (e) throw e;
    }
  };

  // Buy Stock Submit Button
  handleBuyStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;

    try {
      const { data } = await axios.post('/api/stocks/buy', { stockSymbol, user_id });
      const newBalance = data.balance[0][0].initial_budget;
      this.setState({ balance: newBalance });
    } catch (e) {
      if (e) throw e;
    }
  }

  // Sell Stock Submit Button
  handleSellStockSubmit = async (symbol) => {
    const user_id = this.state.currentUser.id;
    const stockSymbol = symbol;

    try {
      const { data } = await axios.post('/api/stocks/sell', { stockSymbol, user_id });
      const newBalance = data.balance[0][0].initial_budget;
      this.setState({ balance: newBalance });
    } catch (e) {
      if (e) throw e;
    }
  }

  // Log Out Button
  // Clears local storage and then sends the user to the Home page
  handleLogOutSubmit() {
    localStorage.clear('currentStockBroker');
    this.props.history.push('/');
  }

  // Renders DashboardStockList JSX component if there is data in the stocks array
  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h4>No Stock yet</h4>;
    } else {
      return this.state.stocks.map((stock) => {
        return <DashboardStockList
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

  // Renders DashboardWatchList JSX component if there is data in the savedStock array
  renderWatchListItems = () => {
    if (this.state.savedStock.length === 0) {
      return <h4>No Stock(s) in Watchlist yet</h4>;
    } else {
      return this.state.savedStock.map((stock) => {
        return <DashboardWatchList
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

  // Alert notification and then sends the user to Home page
  navigateAway() {
    alert('Please create an account to access Dashboard!');
    this.props.history.push('/');
  }

  render() {
    // Conditions that invoke the navigateAway function if true, else the Dashboard page is rendered
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
                      <Button variant="outline-info" onClick={(e) => this.handleLogOutSubmit(e)} className="dashboard-logout-button">Log Out</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card bg="light" border="dark" className="dashboard-budget-card">
                  <Card.Body>
                    <Card.Title>User's Initial Budget:</Card.Title>
                    <Card.Title className="dashboard-budget-value">${this.state.currentUser.initial_budget}</Card.Title>
                    <Card.Title>User's Balance: </Card.Title>
                    <Card.Title className="dashboard-balance-value">${this.state.balance}</Card.Title>
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
