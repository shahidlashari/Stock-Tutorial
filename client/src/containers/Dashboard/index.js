import React, { Component } from 'react';
import RenderStockList from '../RenderStockList/index';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';
import './style.css';

class Dashboard extends Component {
  state = {

    stocks: []
  }
  async componentDidMount() {
    // console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/stocks');
      let stocks = [...this.state.stocks, data];
      this.setState({ stocks });
      // console.log(stocks);
    } catch (e) {
      console.log(e);
    }
  }
  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h1>No Stock yet</h1>;
    } else {
      return this.state.stocks.map(stock => {
        // console.log(stock);
        // console.log(stock.bestMatches[0]["1. symbol"]);
        // // console.log(stock.bestMatches["1. symbol"]);
        return (<RenderStockList
          key={stock.bestMatches[0]["1. symbol"]}

          symbol={stock.bestMatches[0]["1. symbol"]}
          name={stock.bestMatches[0]["2. name"]}
          region={stock.bestMatches[0]["4. region"]}
          marketopen={stock.bestMatches[0]["5. marketOpen"]}
          marketclose={stock.bestMatches[0]["6. marketClose"]}
          timezone={stock.bestMatches[0]["7. timezone"]}
          currency={stock.bestMatches[0]["8. currency"]} />
        )
      });
    }
  }
  render() {

    return (
      <Wrapper>
        <h1 className="title">Stock List</h1>
        {this.renderStockListItems()}
      </Wrapper>
    );
  }
}

export default Dashboard;