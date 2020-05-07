import React from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import TrendingImg from '../../images/card-trending.png';
import DashboardImg from '../../images/card-dashboard.png';
import SignUpImg from '../../images/card-signup.png';

const HomeCardDeck = () => (
  <Container>
    <CardDeck>
      <Card className='text-center'>
        <Card.Img variant='top' src={TrendingImg} />

        <Card.Body>
          <Card.Title className='card-title'>Trending</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button href='/trending' variant='dark'>View Trending Page</Button>
        </Card.Footer>
      </Card>
      
      <Card className='text-center'>
        <Card.Img variant='top' src={DashboardImg} />

        <Card.Body>
          <Card.Title className='card-title'>Dashboard</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button href='/dashboard' variant='dark'>View Dashboard Page</Button>
        </Card.Footer>

      </Card>

      <Card className='text-center'>
        <Card.Img variant='top' src={SignUpImg} />
        
        <Card.Body>
          <Card.Title className='card-title'>Sign-Up/Login</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button href='/signup' variant='dark'>View Sign-Up/Login Page</Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  </Container>
);

export default HomeCardDeck;
