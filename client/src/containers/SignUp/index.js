import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import SignUpErrorU from '../../components/SignUpErrorU';
import SignUpErrorUandP from '../../components/SignUpErrorUandP';
import SignUpErrorUandE from '../../components/SignUpErrorUandE';
import SignUpErrorE from '../../components/SignUpErrorE';
import SignUpErrorEandP from '../../components/SignUpErrorEandP';
import SignUpErrorP from '../../components/SignUpErrorP';
import SignUpErrorUandEandP from '../../components/SignUpErrorUandEandP';
import './style.css';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    isErrorU: false,
    isErrorUandP: false,
    isErrorUandE: false,
    isErrorE: false,
    isErrorEandP: false,
    isErrorP: false,
    isErrorUandEandP: false,
  };

  // Handle input for each input form: username, password, and email
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  // Username input value requirement
  isRequired = (value) => {
    return value && value !== '' ? true : false;
  }

  // Password input value requirement
  isPassword = (value) => {
    if (value !== '') {
      return value && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ? false : true;
    } else {
      return null;
    }
  }

  // Email input value requirement
  isEmail = (value) => {
    if (value !== '') {
      return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? false : true;
    } else {
      return null;
    }
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate input form fields
    const emailCheck = this.isEmail(this.state.email);
    const passwordCheck = this.isPassword(this.state.password);
    const usernameCheck = this.isRequired(this.state.username);

    // Post request to back-end and set local storage, and error handling for invalid input fields
    if (usernameCheck && passwordCheck && emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: false, isErrorE: false, isErrorEandP: false, isErrorP: false, isErrorUandEandP: false });

      const { data } = await axios.post('/api/users/signup', { username: this.state.username, password: this.state.password, email: this.state.email });
      localStorage.setItem('currentStockBroker', JSON.stringify(data.newUser[0]));

      // Sends user to dashboard page sign-up form is complete
      this.props.history.push({
        pathname: '/dashboard',
        state: { newUser: data.newUser[0] },
      });
    } else if (!usernameCheck && passwordCheck && emailCheck) {
      this.setState({ isErrorU: true, isErrorUandP: false, isErrorUandE: false, isErrorE: false, isErrorEandP: false, isErrorP: false, isErrorUandEandP: false });
    } else if (!usernameCheck && !passwordCheck && emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: true, isErrorUandE: false, isErrorE: false, isErrorEandP: false, isErrorP: false, isErrorUandEandP: false });
    } else if (!usernameCheck && passwordCheck && !emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: true, isErrorE: false, isErrorEandP: false, isErrorP: false, isErrorUandEandP: false });
    } else if (usernameCheck && passwordCheck && !emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: false, isErrorE: true, isErrorEandP: false, isErrorP: false, isErrorUandEandP: false });
    } else if (usernameCheck && !passwordCheck && !emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: false, isErrorE: false, isErrorEandP: true, isErrorP: false, isErrorUandEandP: false });
    } else if (usernameCheck && !passwordCheck && emailCheck) {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: false, isErrorE: false, isErrorEandP: false, isErrorP: true, isErrorUandEandP: false });
    } else {
      this.setState({ isErrorU: false, isErrorUandP: false, isErrorUandE: false, isErrorE: false, isErrorEandP: false, isErrorP: false, isErrorUandEandP: true });
    }
  }

  render() {
    return (
      <Container>
        <Card className="signup-card" border="dark">
          <Card.Header className="signup-card-header">Sign-Up Form</Card.Header>
          <Card.Body>
            <Card.Title className="signup-card-title">Create an account to access the dashboard page!</Card.Title>

            <Form>
              <Form.Group controlId="formBasicUsername">
                {this.state.isErrorU ? <SignUpErrorU /> : null }
                {this.state.isErrorUandP ? <SignUpErrorUandP /> : null }
                {this.state.isErrorUandE ? <SignUpErrorUandE /> : null }
                {this.state.isErrorE ? <SignUpErrorE /> : null }
                {this.state.isErrorEandP ? <SignUpErrorEandP /> : null }
                {this.state.isErrorP ? <SignUpErrorP /> : null }
                {this.state.isErrorUandEandP ? <SignUpErrorUandEandP /> : null }
                <Form.Label className="signup-username-label">Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="signup-password-label">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">Password must be 6-16 characters, and must contain at least one number and one special character!</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="signup-email-label">Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
            </Form>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                onClick={(event) => this.handleFormSubmit(event)}
                className="signup-submit-button"
              >
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(SignUp);
