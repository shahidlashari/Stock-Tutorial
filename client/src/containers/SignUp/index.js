import React, { Component } from 'react';
import './style.css';
import { Container, Form, Button } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''

  }
  
  render() {
    return (
      <Container>
        <h1>Create your own account!</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Create your username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassord">
          <Form.Label>Passord</Form.Label>
            <Form.Control type="password" placeholder="Type your secret password" />
            <Form.Text className="text-muted">
              Your password should be at least 6 characters and not more than 15.
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default SignUp;