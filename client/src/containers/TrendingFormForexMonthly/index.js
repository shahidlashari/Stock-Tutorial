import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class ForeignMonthly extends Component {
  state = {
    forexFromInput: '',
    forexToInput: '',
  };

  handleForexMonthlyFromChange = (event) => {
    this.setState({ forexFromInput: event.target.value });
  }

  handleForexMonthlyToChange = (event) => {
    this.setState({ forexToInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleForexMonthlySubmit(this.state.forexFromInput, this.state.forexToInput);
    this.setState({ forexFromInput: '', forexToInput: '' });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formForeignMonthly">
          <Form.Label>Foreign Exchange Rate Monthly</Form.Label>

          <Form>
            <Form.Row>
              <Col>
                <Form.Control value={this.state.forexFromInput} onChange={this.handleForexMonthlyFromChange} type="text" placeholder="EUR" />
              </Col>

              <Col>
                <Form.Control value={this.state.forexToInput} onChange={this.handleForexMonthlyToChange} type="text" placeholder="USD" />
              </Col>
            </Form.Row>
          </Form>

          <Form.Text className="text-muted">Note: Must be physical currency</Form.Text>
          <Form.Text className="text-muted">Ex: EUR (Euro) to USD (US Dollar)</Form.Text>
        </Form.Group>

        <Button onClick={(e) => this.handleSubmit(e)} variant="dark" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default ForeignMonthly;
