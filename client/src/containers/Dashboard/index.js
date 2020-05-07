import React, { Component } from 'react';
import RenderStockList from '../RenderStockList/index';
import Wrapper from '../../components/Wrapper';
import { Button, Container, Row, Col, Form, Card, FormControl, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

class Dashboard extends Component {
  state = {
    stocks: [],
    priceStock: [],
    stockInput:''
    // dash: [],
    // username: '',
    // budget: '',
    // stocksearch: ''
  }
  // async componentDidMount() {
  //   console.log(inputSymbol);

  //   try {
  //     const inputSymbol = this.state.stockInput
  //     const { data: { bestMatches } } = await axios.get('/api/stocks');
  //     let stocks = [...this.state.stocks, ...bestMatches];
  //     // console.log(bestMatches);
  //     this.setState({ stocks });
  //     // console.log(stocks);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  handleStockInputChange = event => {
    this.setState({ stockInput: event.target.value });
  }
  handleStockSearchSubmit = async event => {
    event.preventDefault();
    try {
      const inputSymbol = this.state.stockInput
      console.log(inputSymbol);
      // const { data } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      const { data } = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${inputSymbol}&apikey=MN608K5DXF6IBFAL`)
      console.log(data);
      // let stocks = [...this.state.stocks, ...bestMatches];
      // console.log(bestMatches);
      // this.setState({ stocks });
    } catch (err) {
      console.log(err)
    }
  }
  // handleSubmit = async symbol => {
  //   // console.log(symbol);
  //   try {
  //     const { data } = await axios.get(`/api/stocks/show?q=${symbol}`);
  //     // const { data } = await axios.get(`/api/stocks/show${symbol}`);
  //     // console.log(data);
  //     const priceStock = [...this.state.priceStock, data];
  //     // this.setState({ priceStock});
  //     this.setState({ priceStock: [] });
  //     console.log(priceStock);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h1>No Stock yet</h1>;
    } else {
      return this.state.stocks.map(stock => {
        console.log(stock);
      
        return <RenderStockList

          key={stock["1. symbol"]}
          symbol={stock["1. symbol"]}
          name={stock["2. name"]}
          region={stock["4. region"]}
          matchscore={stock["9. matchScore"]}
          currency={stock["8. currency"]}
          handleSubmit={this.handleSubmit}
        // openprice={this.state.priceStock[5]}
        />

      })

    }
  }
  render() {

    // console.log(this.state.stocks)
    return (


      <Wrapper>
        <h1 className="title">Stock List</h1>
        {this.renderStockListItems()}
       
          <Container fluid>
            <Row>
              <Col md={4}>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>Username: {this.state.username}</Card.Title>
                    <Card.Text>
                      This shows your username and your inputted user information!
                 </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>
                      User's Budget: ${this.state.budget}
                    </Card.Title>
                    <Card.Text>This shows the user's budget for trading!</Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="light" border="primary">
                  <Card.Body>
                    <Card.Title>Stock Watchlist</Card.Title>
                    <Card.Text>
                      This shows your saved stocks!
                 </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <br />
              <Col md={8}>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>Stock Search</Card.Title>
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={this.handleInputChange}
                      />
                      <Button variant="outline-info" onClick={ (e) => this.handleStockSearchSubmit(e) }>Search</Button>
                    </Form>
                    <br />
                  </Card.Body>
                </Card>
                <Card border="dark">
                  <Card.Body>
                    <Card.Title>Stock Buy/Sell</Card.Title>
                    <Button variant="outline-success" >Buy</Button>
                    <Button variant="outline-danger" >Sell</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        


      </Wrapper>


    );

  }
}



export default Dashboard;



