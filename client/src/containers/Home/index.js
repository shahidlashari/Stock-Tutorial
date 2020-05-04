import React, { Component } from 'react';
import './style.css';
import {Container, Row, Col} from 'react-bootstrap'

class Home extends Component {
  state = {
    input: ''
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><h1>I'm in Home!</h1></Col>
        </Row>
      </Container>
    )
  };
}

export default Home;