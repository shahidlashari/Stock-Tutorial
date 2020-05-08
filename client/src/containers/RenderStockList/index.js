import React, { Component } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import axios from "axios";

class RenderStockList extends Component {
  state = {
    priceStock: {},
    isStock: false,
    user_id: 1,
    symbol: "",
    savedNotification: "",
  };

  handlePriceSubmit = async (symbol) => {
    this.setState({ symbol: this.props.symbol });
    try {
      const { data } = await axios.get(`/api/stocks/show?q=${symbol}`);
      // const { data } = await axios.get(`/api/stocks/show${symbol}`);
      console.log(data);
      // const priceStock = [...this.state.priceStock, data];
      // this.setState({ priceStock});
      this.setState({ priceStock: data, isStock: true });
      // console.log(priceStock);
    } catch (e) {
      console.log(e);
    }
  };

  // handleStockSubmit = async symbol => {
  //   console.log(symbol)
  //   try {
  //     const { data } = await axios.post(`/api/stocks/save?q=${symbol}`);
  //     console.log(data);
  //     this.setState({priceStock: this.state.data})

  handleSaveStockSubmit = async (symbol) => {
    console.log(this.state.user_id);
    const user_id = this.state.user_id;
    const stockSymbol = symbol;
    console.log(stockSymbol);
    try {
      const { data } = await axios.post(`/api/stocks/save`,{
        stockSymbol,
        user_id,
      });
      console.log(data);
      this.setState({ savedNotification: data });
    } catch (e) {
      console.log(e);
    }
  };
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
            </li>
            {/* <span onClick={ () => props.handleSubmit(props.symbol) }  className="remove">Show Price</span> */}
            <Button
              variant="light"
              onClick={() => this.handlePriceSubmit(this.props.symbol)}
              className="submit"
            >
              Show Price
            </Button>
            <Button
              variant="light"
              onClick={() => this.handleSaveStockSubmit(this.props.symbol)}
              className="submit"
            >
              Save Stock
            </Button>
            <Button variant="success"> Buy Stock </Button>
            <Button variant="danger"> Sell Stock </Button>
            <br />
            {this.state.isStock && (
              <div>
                <p>
                  <strong>Date:</strong> {this.state.priceStock.date}
                </p>
                <p>
                  <strong>Price-Open: </strong>{" "}
                  {this.state.priceStock.priceOpen}
                </p>
                <p>
                  <strong>Price-High:</strong> {this.state.priceStock.priceHigh}
                </p>
                <p>
                  <strong>Price-Low:</strong> {this.state.priceStock.priceLow}
                </p>
                <p>
                  <strong>Price-Close:</strong>{" "}
                  {this.state.priceStock.priceClose}
                </p>
                <p>{this.state.savedNotification}</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default RenderStockList;
