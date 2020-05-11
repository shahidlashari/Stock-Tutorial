import React, { Component } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class RenderStockList extends Component {
  state = {
    priceStock: [],
    isStock: false,
  };

  handlePriceSubmit = async (symbol) => {
    try {
      const { data } = await axios.get(`/api/stocks/show?q=${symbol}`);
      this.setState({ priceStock: data, isStock: true });
    } catch (e) {
      if (e) throw e;
    }
  };

  render() {
    return (
      <div className="dashboard-stock-display">
        <div className="dashboard-stock-content">
          <ul>
            <li className="stocklist-symbol">
              <strong>Symbol:</strong> {this.props.symbol}
            </li>
            <li className="stocklist-name">
              <strong>Name:</strong> {this.props.name}
            </li>
            <Button
              variant="light"
              onClick={() => this.handlePriceSubmit(this.props.symbol)}
              className="dashboard-price-button"
            >
              Show Price
            </Button>
            {this.state.isStock && (
              <div>
                <ul>
                  <li>
                    <strong>Date:</strong> {this.state.priceStock.date}
                  </li>
                  <li>
                    <strong>Price-Open: </strong>
                    {this.state.priceStock.priceOpen}
                  </li>
                  <li>
                    <strong>Price-High: </strong>
                    {this.state.priceStock.priceHigh}
                  </li>
                  <li>
                    <strong>Price-Low: </strong> {this.state.priceStock.priceLow}
                  </li>
                  <li>
                    <strong>Price-Close: </strong>
                    {this.state.priceStock.priceClose}
                  </li>
                  <br />
                  <Button
                    variant="dark"
                    onClick={() => this.props.handleSaveStockSubmit(this.props.symbol)}
                    className="dashboard-save-button"
                  >
                    Save Stock
                  </Button>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default RenderStockList;
