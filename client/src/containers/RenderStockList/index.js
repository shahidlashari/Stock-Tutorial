import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

class RenderStockList extends Component {
  state = {
    priceStock: {},
    isStock: false
  }
  // console.log(props.key);
  // console.log(props);

  handlePriceSubmit = async symbol => {
    console.log(symbol);
    try {
      const { data } = await axios.get(`/api/stocks/show?q=${symbol}`);
      // const { data } = await axios.get(`/api/stocks/show${symbol}`);
      console.log(data);
      // const priceStock = [...this.state.priceStock, data];
      // this.setState({ priceStock});
      this.setState({priceStock: data, isStock: true});
      // console.log(priceStock);
    } catch (e) {
      console.log(e);
    }
  }

  handleStockSubmt = async symbol => {
    try {
      const { data } = await axios.post('');
      console.log(data);
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div className="dashboard-stock-display">
        <div className="dashboard-stock-content">
          <ul>
            <li>
              <strong>Symbol:</strong> {this.props.symbol}
            </li>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Region:</strong> {this.props.region}
            </li>
            <li>
              <strong>Currency:</strong> {this.props.currency}
            </li>
            {/* <span onClick={ () => props.handleSubmit(props.symbol) }  className="remove">Show Price</span> */}
            <button onClick={ () => this.handlePriceSubmit(this.props.symbol)} className="submit"> Show Price </button>
            <button onClick={ () => this.handleStockSubmit(this.props.symbol)} className="submit"> Save Stock </button>
            { this.state.isStock && 
              <div>
                <p>Date: {this.state.priceStock.date}</p>
                <p>Price-Open: {this.state.priceStock.priceOpen}</p>
                <p>Price-High: {this.state.priceStock.priceHigh}</p>
                <p>Price-Low: {this.state.priceStock.priceLow}</p>
                <p>Price-Close: {this.state.priceStock.priceClose}</p>
              </div>
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default RenderStockList;