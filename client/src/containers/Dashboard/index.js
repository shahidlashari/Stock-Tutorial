import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Card, FormControl, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

class Dashboard extends Component {
  state = {
    dash: [],
    username: '',
    budget: '',
    stocksearch: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/stocks');
      const stocks = [...this.state.stocks, data];
      this.setState({ stocks });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
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
                <Card.Header>Stock Search and Charts</Card.Header>
                <Card.Body>
                  <Card.Title>Stock Search</Card.Title>
                  <Form inline>
                    <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" 
                    onChange={this.handleInputChange} 
                    />
                    <Button variant="outline-info" onSubmit={this.handleSubmit}>Search</Button>
                  </Form>
                  <br />
                  <Card.Title>Stock Charts</Card.Title>
                  <Card.Text>
                    The stock charts should be displayed here.
                  </Card.Text>
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
      </div>
    )
  };
}

export default Dashboard;