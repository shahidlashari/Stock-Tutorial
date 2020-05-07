import React from 'react';
import "./style.css";

function RenderStockList(props) {
  // console.log(props.key);
  // console.log(props);
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li key = {props.key}>
            <strong>Symbol:</strong> {props.symbol}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Region:</strong> {props.region}
          </li>
          <li>
            <strong>Currency:</strong> {props.currency}
          </li>
          {/* <span onClick={ () => props.handleSubmit(props.symbol) }  className="remove">Show Price</span> */}
          <button onClick={ () => props.handleSubmit(props.symbol) }  className="sumbmit"> Show Price </button>
         
         
          <li>
            <strong>Open Price:</strong> {props.openprice}
          </li>
          {/* <li>
            <strong>High Price:</strong> {props.matchscore}
          </li><li>
            <strong>Low Price:</strong> {props.marketclose}
          </li>
          <li>
            <strong>Close Price:</strong> {props.matchscore}
          </li> */}
        </ul>
      </div>
    </div>
  );
}
export default RenderStockList;