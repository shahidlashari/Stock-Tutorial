import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import TrendingErrorMessage from '../../components/TrendingErrorInput';
import TrendingErrorAPI from '../../components/TrendingErrorAPI';

class DigitalMonthly extends Component {
  state = {
    digitalCurrencyInput: '',
    digitalMarketInput: '',
    isErrorInput: false,
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ isErrorInput: false }), 5000);
  }

  handleDigitalMonthlyFromChange = (event) => {
    this.setState({ digitalCurrencyInput: event.target.value });
  }

  handleDigitalMonthlyToChange = (event) => {
    this.setState({ digitalMarketInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.digitalCurrencyInput === '' || this.state.digitalMarketInput === '') {
      this.setState({ isErrorInput: true });
    } else {
      this.props.handleDigitalMonthlySubmit(this.state.digitalCurrencyInput.toUpperCase(), this.state.digitalMarketInput.toUpperCase());
      this.setState({ digitalCurrencyInput: '', digitalMarketInput: '' });
    }
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formDigitalMonthly">
          <Form.Label>Digital Currency Monthly</Form.Label>

          <Form>
            <Form.Row>
              <Col>
                <Form.Label>Digital Currency</Form.Label>
                <Form.Control value={this.state.digitalCurrencyInput} onChange={this.handleDigitalMonthlyFromChange} autoComplete="off" type="text" placeholder="BTC" />
              </Col>

              <Col>
                <Form.Label>Physical Market</Form.Label>
                <Form.Control value={this.state.digitalMarketInput} onChange={this.handleDigitalMonthlyToChange} autoComplete="off" type="text" placeholder="CNY" />
              </Col>
            </Form.Row>
          </Form>
          {this.state.isErrorInput ? <TrendingErrorMessage /> : null }
          {this.props.isErrorDigitalAPI ? <TrendingErrorAPI /> : null}
          <Form.Text className="text-muted">Ex: CNY (Chinese Yuan), MXN (Mexican Peso), KRW (South Korean Won), etc.</Form.Text>
        </Form.Group>

        <Button onClick={(e) => this.handleSubmit(e)} variant="dark" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default DigitalMonthly;
