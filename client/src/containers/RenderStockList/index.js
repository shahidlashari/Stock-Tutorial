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
      console.log(data);
      this.setState({ priceStock: data, isStock: true });
      console.log(this.state.priceStock);
    } catch (e) {
      console.log(e);
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
                <p>
                  <strong>Date:</strong> {this.state.priceStock.date}
                </p>
                <p>
                  <strong>Price-Open: </strong>
                  {this.state.priceStock.priceOpen}
                </p>
                <p>
                  <strong>Price-High:</strong> {this.state.priceStock.priceHigh}
                </p>
                <p>
                  <strong>Price-Low:</strong> {this.state.priceStock.priceLow}
                </p>
                <p>
                  <strong>Price-Close:</strong> {this.state.priceStock.priceClose}
                </p>
                <Button
                  variant="dark"
                  onClick={() => this.props.handleSaveStockSubmit(this.props.symbol)}
                  className="dashboard-save-button"
                >
                  Save Stock
                </Button>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default RenderStockList;
