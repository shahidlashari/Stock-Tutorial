import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip, Form, Button } from 'react-bootstrap';
import TrendingErrorInput from '../../components/TrendingErrorInput';
import TrendingErrorAPI from '../../components/TrendingErrorAPI';

class TrendingCardStock extends Component {
  state = {
    stockInput: '',
    isErrorInput: false,
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ isErrorInput: false }), 5000);
  }

  handleStockInputChange = (event) => {
    this.setState({ stockInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.stockInput === '') {
      this.setState({ isErrorInput: true });
    } else {
      this.props.handleStockSubmit(this.state.stockInput.toUpperCase());
      this.setState({ stockInput: '' });
    }
  }

  render() {
    return (
      <>
        <Card border="dark">
          <Card.Header className="stock-header">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id={'tooltip-top'}>
                  Realtime and historical global equity data by Monthly time
                  series
                </Tooltip>
              }
            >
              <Card.Title>Stock Time Series</Card.Title>
            </OverlayTrigger>
          </Card.Header>

          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="formStockSymbol">
                  <Form.Label>Time Series Monthly</Form.Label>
                  <Form.Control value={this.state.stockInput} onChange={this.handleStockInputChange} autoComplete="off" type="text" placeholder="Enter stock symbol" />
                  {this.state.isErrorInput ? <TrendingErrorInput /> : null }
                  {this.props.isErrorStockAPI ? <TrendingErrorAPI /> : null}
                  <Form.Text className="text-muted">e.g. FB (Facebook), AMZN (Amazon), MSFT (Microsoft), etc.</Form.Text>
                </Form.Group>

                <Button onClick={(e) => this.handleSubmit(e)} variant="dark" type="submit">Submit</Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default TrendingCardStock;
