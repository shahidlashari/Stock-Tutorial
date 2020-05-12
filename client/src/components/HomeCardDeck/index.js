import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import TrendingImg from '../../images/card-trending.png';
import DashboardImg from '../../images/card-dashboard.png';
import SignUpImg from '../../images/card-signup.png';
import './style.css';

const HomeCardDeck = () => {
  return (
    <Container>
      <Row>
        <CardDeck>
          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className="home-trending-card" border="dark">
              <Card.Img variant="top" src={TrendingImg} />

              <Card.Body>
                <Card.Title className="home-trending-title">Trending</Card.Title>
                <Card.Text>
                  Analyze the current trends and obtain data based on:
                  <ul className="home-trending-information">
                    <li>Stock Time Series (Monthly)</li>
                    <li>Currency Exchange Rate</li>
                    <li>Foreign Exchange Rate (Monthly)</li>
                    <li>Cryptorating</li>
                    <li>Digital Currency in the Physical Market (Monthly)</li>
                  </ul>
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Button as={Link} to="/trending" variant="dark">View Trending Page</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className="home-dashboard-card" border="dark">
              <Card.Img variant="top" src={DashboardImg} />

              <Card.Body>
                <Card.Title className="home-dashboard-title">Dashboard</Card.Title>
                <Card.Text>
                  User dashboard that allows the user to interact with their
                  stocks/shares and emulate a simple stock portfolio:
                  <ul className="home-dashboard-information">
                    <li>
                      Stock Search (Best-Matching Symbols and Market
                      Information)
                    </li>
                    <li>Stock Watchlist</li>
                    <li>User Information</li>
                    <li>User Budget</li>
                    <li>Buy/Sell/Save Stock</li>
                  </ul>
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Button as={Link} to="/dashboard" variant="dark">View Dashboard Page</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className="home-signup-card" border="dark">
              <Card.Img variant="top" src={SignUpImg} />

              <Card.Body>
                <Card.Title className="home-signup-title">Sign-Up</Card.Title>
                <Card.Text>
                  Access dashboard page by first creating an account in the
                  Sign-Up form, which requires:
                  <ul className="home-signup-information">
                    <li>Username</li>
                    <li>Password</li>
                    <li>Email Address</li>
                  </ul>
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Button as={Link} to="/signup" variant="dark">View Sign-Up Page</Button>
              </Card.Footer>
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default HomeCardDeck;
