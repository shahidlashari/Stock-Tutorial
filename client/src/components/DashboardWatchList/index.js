import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const DashboardWatchList = (props) => {
  return (
    <div className="dashboard-stock-display">
      <div className="dashboard-stock-content">
        <ul>
          {props.isWatchList ? (
            <div>
              <li>
                <strong>Symbol:</strong> {props.symbol}
              </li>
              <li>
                <strong>Price:</strong> {props.price}
              </li>
              <br />
              <Button
                variant="success"
                onClick={() => props.handleBuyStockSubmit(props.symbol)}
                className="dashboard-buy-button"
              >
                Buy Stock
              </Button>
              <Button
                variant="danger"
                onClick={() => props.handleSellStockSubmit(props.symbol)}
                className="dashboard-sell-button"
              >
                Sell Stock
              </Button>
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default DashboardWatchList;
