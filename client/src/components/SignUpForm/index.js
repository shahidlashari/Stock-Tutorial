import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignUpErrorU from '../SignUpErrorU';
import SignUpErrorUandP from '../SignUpErrorUandP';
import SignUpErrorUandE from '../SignUpErrorUandE';
import SignUpErrorE from '../SignUpErrorE';
import SignUpErrorEandP from '../SignUpErrorEandP';
import SignUpErrorP from '../SignUpErrorP';
import SignUpErrorUandEandP from '../SignUpErrorUandEandP';

const SignUpForm = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          {props.isErrorU ? <SignUpErrorU /> : null}
          {props.isErrorUandP ? <SignUpErrorUandP /> : null}
          {props.isErrorUandE ? <SignUpErrorUandE /> : null}
          {props.isErrorE ? <SignUpErrorE /> : null}
          {props.isErrorEandP ? <SignUpErrorEandP /> : null}
          {props.isErrorP ? <SignUpErrorP /> : null}
          {props.isErrorUandEandP ? <SignUpErrorUandEandP /> : null}
          <Form.Label className="signup-username-label">Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            autoComplete="off"
            placeholder="Enter username"
            value={props.username}
            onChange={props.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="signup-password-label">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleInputChange}
          />
          <Form.Text className="text-muted">
            Password must be 6-16 characters, and must contain at least one
            number and one special character!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="signup-email-label">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>

      <div className="text-center">
        <Button
          variant="primary"
          type="submit"
          size="lg"
          onClick={(event) => props.handleFormSubmit(event)}
          className="signup-submit-button"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
