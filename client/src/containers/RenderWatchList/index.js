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
              <Button variant="success">Buy Stock</Button>
              <Button variant="danger">Sell Stock</Button>
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default RenderWatchList;
