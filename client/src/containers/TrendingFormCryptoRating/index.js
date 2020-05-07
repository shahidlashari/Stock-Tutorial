import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Cryptorating extends Component {
  state = {
    cryptoInput: ''
  };

  handleCryptoChange = (event) => {
    this.setState({ cryptoInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleCryptoSubmit(this.state.cryptoInput);
    this.setState({ cryptoInput: ''});
  }

  render() {
    return (
      <Form>
        <Form.Group controlId='formCryptoRating'>
          <Form.Label>Cryptorating</Form.Label>
          <Form.Control value={this.state.cryptoInput} onChange={this.handleCryptoChange} type='text' placeholder='Enter digital currency'/>
          <Form.Text className='text-muted'>Ex: BTC (Bitcoin), ETH (Ethereum), USDT (Tether), etc.</Form.Text>
        </Form.Group>
        
        <Button onClick={(e) => this.handleSubmit(e)} variant='dark' type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default Cryptorating;
