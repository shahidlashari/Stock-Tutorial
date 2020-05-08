import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class DigitalMonthly extends Component {
  state = {
    digitalCurrencyInput: '',
    digitalMarketInput: ''
  };

  handleDigitalMonthlyFromChange = event => {
    this.setState({ digitalCurrencyInput: event.target.value });
  }

  handleDigitalMonthlyToChange = event => {
    this.setState({ digitalMarketInput: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleDigitalMonthlySubmit(this.state.digitalCurrencyInput, this.state.digitalMarketInput);
    this.setState({ digitalCurrencyInput: '', digitalMarketInput: ''});
  }

  render() {
    return (
      <Form>
        <Form.Group controlId='formDigitalMonthly'>
          <Form.Label>Digital Currency Monthly</Form.Label>

          <Form>
            <Form.Row>
              <Col>
                <Form.Label>Digital Currency</Form.Label>
                <Form.Control value={this.state.digitalCurrencyInput} onChange={this.handleDigitalMonthlyFromChange} type='text' placeholder='BTC' />
              </Col>

              <Col>
                <Form.Label>Physical Market</Form.Label>
                <Form.Control value={this.state.digitalMarketInput} onChange={this.handleDigitalMonthlyToChange} type='text' placeholder='CNY' />
              </Col>
            </Form.Row>
          </Form>

          <Form.Text className='text-muted'>Ex: CNY (Chinese Yuan), MXN (Mexican Peso), KRW (South Korean Won), etc.</Form.Text>
        </Form.Group>

        <Button onClick={(e) => this.handleSubmit(e)} variant='dark' type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default DigitalMonthly;
