import React, { Component } from "react";
import axios from "axios";
// import UploadScreen from 'UploadScreen';
import "./style.css";
import { Container, Form, Button } from "react-bootstrap";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };
  handleClick(event) {
    var apiBaseUrl = "http://localhost:3001/api/user";
    var self = this;
    var payload = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post(apiBaseUrl + "login", payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
          // var uploadScreen = [];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
          self.props.appContext.setState({ loginPage: [] });
        } else if (response.data.code === 204) {
          console.log("Username does not match");
          alert("Username does not match");
        } else if (response.data.code === 204) {
          console.log("Password do not match");
          alert("Password do not match");
        } else {
          console.log("Email does not exists");
          alert("Email does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <h1 className='signup-title'>Create your own account!</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Create your username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <Form.Text className="text-muted">
              Password length must be at laest 6 characters.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
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

export default SignUp;
