import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import DashboardCardUser from '../../components/DashboardCardUser';
import DashboardCardSearch from '../../components/DashboardCardSearch';
import DashboardRenderStockList from '../DashboardRenderStockList';
import DashboardRenderWatchList from '../../components/DashboardRenderWatchList';
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

  // Renders DashboardRenderStockList JSX component if there is data in the stocks array
  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h4>No Stock yet</h4>;
    } else {
      return this.state.stocks.map((stock) => {
        return <DashboardRenderStockList
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

  // Renders DashboardRenderWatchList JSX component if there is data in the savedStock array
  renderWatchListItems = () => {
    if (this.state.savedStock.length === 0) {
      return <h4>No Stock(s) in Watchlist yet</h4>;
    } else {
      return this.state.savedStock.map((stock) => {
        return <DashboardRenderWatchList
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
                <DashboardCardUser
                  id={this.state.currentUser.id}
                  username={this.state.currentUser.username}
                  email={this.state.currentUser.email}
                  initial_budget={this.state.currentUser.initial_budget}
                  balance={this.state.balance}
                  renderWatchListItems={this.renderWatchListItems}
                />
              </Col>

              <Col md={8}>
                <DashboardCardSearch
                  stockInput={this.state.stockInput}
                  handleStockInputChange={this.handleStockInputChange}
                  handleStockSearchSubmit={this.handleStockSearchSubmit}
                  renderStockListItems={this.renderStockListItems}
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      );
    }
  }
}

export default withRouter(Dashboard);
