import React from 'react';
import { Button } from 'react-bootstrap';

const RenderWatchList = (props) => {
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
                // eslint-disable-next-line react/no-this-in-sfc
                onClick={() => props.handleBuyStockSubmit(props.symbol)}
                className="dashboard-save-button">Buy Stock</Button>
              <Button 
                variant="danger"
                // eslint-disable-next-line react/no-this-in-sfc
                onClick={() => props.handleSellStockSubmit(props.symbol)}
                className="dashboard-save-button">Sell Stock</Button>
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default RenderWatchList;
