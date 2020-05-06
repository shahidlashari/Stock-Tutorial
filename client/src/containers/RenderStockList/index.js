import React from 'react';
import "./style.css";
function RenderStockList(props) {
  // console.log(props.key);
  
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
            <strong>Market Open:</strong> {props.marketOpen}
          </li>
          <li>
            <strong>Market Close:</strong> {props.marketClose}
          </li>
          <li>
            <strong>Time Zone:</strong> {props.timezone}
          </li>
          <li>
            <strong>Currency:</strong> {props.currency}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default RenderStockList;