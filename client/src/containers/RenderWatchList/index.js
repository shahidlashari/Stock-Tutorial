// import React, { Component } from 'react';
// // eslint-disable-next-line import/no-unresolved
// import './style.css';
// import { Button } from 'react-bootstrap';
// // eslint-disable-next-line import/order
// import axios from 'axios';

// class RenderWatchList extends Component {
//   state = {
//     // eslint-disable-next-line react/no-unused-state
//     // watchListStock: {},
//     isStock: false,
//     // eslint-disable-next-line react/no-unused-state
//     user_id: 1,
//     // eslint-disable-next-line react/no-unused-state
//     symbol: '',
//   };

//   // handleWatchListSubmit = async (symbol) => {
//   //   // eslint-disable-next-line react/no-unused-state
//   //   this.setState({ symbol: this.props.symbol });
//   //   try {
//   //     const { data } = await axios.get(`/api/stocks/show?q=${symbol}`);
//   //     // console.log(data);
//   //     this.setState({ watchListStock: data, isStock: true });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // };
//   render() {
//     return (
//       <div className="dashboard-stock-display">
//         <div className="dashboard-stock-content">
//           <ul>
//             <li>
//               <strong>Symbol:</strong> {this.props.symbol}
//             </li>
//             <li>
//               <strong>Name:</strong> {this.props.name}
//             </li>
//             {/* <li>
//               <strong>Region:</strong> {this.props.region}
//             </li>
//             <li>
//               <strong>Currency:</strong> {this.props.currency}
//             </li> */}
//             {/* <Button
//               variant="light"
//               onClick={() => this.handleWatchlist(this.props.symbol)}
//               className="submit"
//             >
//               Save Stock
//             </Button> */}
//             <Button variant="success"> Buy Stock </Button>
//             <Button variant="danger"> Sell Stock </Button>
//             {/* {this.state.isStock &&
//               <div>
//                 <p>Date: {this.state.watchListStock.date}</p>
//                 <p>Price-Open: {this.state.watchListStock.priceOpen}</p>
//                 <p>Price-High: {this.state.watchListStock.priceHigh}</p>
//                 <p>Price-Low: {this.state.watchListStock.priceLow}</p>
//                 <p>Price-Close: {this.state.watchListStock.priceClose}</p>
//               </div>} */}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default RenderWatchList;
