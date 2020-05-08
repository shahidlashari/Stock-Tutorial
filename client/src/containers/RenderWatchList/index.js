import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

class RenderWatchList extends Component {
  state = {
    isStock: false,
    user_id: 1,
    savedNotification: ''
  }

  handleWatchListSubmit = async symbol => {
    console.log(this.state.user_id);
    const user_id =  this.state.user_id;
    const stockSymbol = symbol;
    try {
      const { data } = await axios.post(`/api/stocks/save`,{stockSymbol, user_id});
      console.log(data);
      this.setState({savedNotification: data})
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
            {/* <li>
              <strong>Region:</strong> {this.props.region}
            </li>
            <li>
              <strong>Currency:</strong> {this.props.currency}
            </li> */}
            <button onClick={ () => this.handlePriceSubmit(this.props.symbol)} className="submit"> Show Price </button>
            <button onClick={ (e) => this.handleSaveStockSubmit(this.state.symbol)} className="submit"> Save Stock </button>
            { this.state.isStock && 
              <div>
                <p>Date: {this.state.priceStock.date}</p>
                <p>Price-Open: {this.state.priceStock.priceOpen}</p>
                <p>Price-High: {this.state.priceStock.priceHigh}</p>
                <p>Price-Low: {this.state.priceStock.priceLow}</p>
                <p>Price-Close: {this.state.priceStock.priceClose}</p>
                <p>{this.state.savedNotification}</p>
              </div>
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default RenderWatchList;