import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import SignUpForm from '../../components/SignUpForm';
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

      // redirects user to dashboard page sign-up form is complete
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

            <SignUpForm
              username={this.state.username}
              password={this.state.password}
              email={this.state.email}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              isErrorU={this.state.isErrorU}
              isErrorUandP={this.state.isErrorUandP}
              isErrorUandE={this.state.isErrorUandE}
              isErrorE={this.state.isErrorE}
              isErrorEandP={this.state.isErrorEandP}
              isErrorP={this.state.isErrorP}
              isErrorUandEandP={this.state.isErrorUandEandP}
            />

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(SignUp);
