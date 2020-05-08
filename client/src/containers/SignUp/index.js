import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import "./style.css";
import { Container, Form, Button } from "react-bootstrap";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };
  async handleClick(event) {
    event.preventDefault();
    const {data}= await axios.post('/api/users/signup', {username: this.state.username, password: this.state.password, email: this.state.email});
    console.log(data);
    this.props.history.push({
      pathname: '/dashboard',
      state: {newUser:data}

    })
    };
   
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <Container>
        <h1 className='signup-title'>Create your own account!</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name= 'username'
              type="text"
              placeholder="Create your username"
              value={this.state.username}
              onChange={this.handleInputChange} 
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name= 'password'
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputChange} 
              
            />
            <Form.Text className="text-muted">
              Password length does not matter.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
               name= 'email'
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange} 
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => this.handleClick(event)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
