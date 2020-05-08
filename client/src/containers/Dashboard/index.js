import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Card, FormControl } from 'react-bootstrap';
import RenderStockList from '../RenderStockList';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';
import './style.css';

class Dashboard extends Component {
  state = {
    stocks: [],
    priceStock: [],
    stockInput: '',
    currentUser: {}
    // dash: [],
    // username: '',
    // budget: '',
    // stocksearch: ''
  }
  componentDidMount() {
    console.log(this.props.history);

    const newUser = this.props.history.location.state && this.props.history.location.state.newUser
      ? this.props.history.location.state.newUser
      : undefined

    this.setState({
      currentUser: newUser
    })
    // console.log(newUser);
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

  renderStockListItems = () => {
    if (this.state.stocks.length === 0) {
      return <h1>No Stock yet</h1>;
    } else {
      return this.state.stocks.map(stock => {
        // console.log(stock);

        return <RenderStockList

          // key={stock["1. symbol"]}
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

  handleStockInputChange = event => {
    this.setState({ stockInput: event.target.value });
  }

  handleStockSearchSubmit = async event => {
    event.preventDefault();
    try {
      const inputSymbol = this.state.stockInput
      // console.log(inputSymbol);
      const { data: { bestMatches } } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputSymbol}&apikey=4EOUWW7RMTJ1A28A`);
      // console.log(data);
      let stocks = [...this.state.stocks, ...bestMatches];
      // console.log(bestMatches);

      this.setState({ stocks });
      // renderStockListItems()
    } catch (err) {
      console.log(err)
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
                      value={this.state.stockInput}
                      onChange={this.handleStockInputChange}
                    />
                    <Button variant="outline-info" onClick={(e) => this.handleStockSearchSubmit(e)}>Search</Button>
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

export default withRouter(Dashboard);



