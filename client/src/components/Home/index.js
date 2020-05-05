import React from 'react';
import { Jumbotron, Container, CardDeck, Card, Button } from 'react-bootstrap'
import trending from '../../images/card-trending.png';
import dashboard from '../../images/card-dashboard.png';
import signup from '../../images/card-signup.png';

import './style.css';

const Home = () => (
  <div>
    <Jumbotron fluid className="background">
      <Container className="jumbotron-text">
        <h1 className="title">Stock Tutorial</h1>
        <h3 className="subtitle-1">Learn how to analyze and exchange stocks through a stock portfolio emulation!</h3>
        <h4 className="subtitle-2">Utilizes Alpha Vantage API to display real-time stock data</h4>
      </Container>
    </Jumbotron>
    <Container>
      <CardDeck>
        <Card className="text-center">
          <Card.Img variant="top" src={trending} />
          <Card.Body>
            <Card.Title className="card-title">Trending</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="/trending" variant="dark">View Trending Page</Button>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={dashboard} />
          <Card.Body>
            <Card.Title className="card-title">Dashboard</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="/dashboard" variant="dark">View Dashboard Page</Button>
          </Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={signup} />
          <Card.Body>
            <Card.Title className="card-title">Sign-Up/Login</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="/signup" variant="dark">View Sign-Up/Login Page</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </div>
)

export default Home;