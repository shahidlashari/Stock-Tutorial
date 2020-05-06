import React from "react";
import { Form, Col, Button } from 'react-bootstrap';

const CurrencyExchangeRate = () => (
  <Form>
    <Form.Group controlId="formCurrencyExchangeRate">
      <Form.Label>Currency Exchange Rate</Form.Label>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="USD" />
          </Col>
          <Col>
            <Form.Control placeholder="JPY" />
          </Col>
        </Form.Row>
      </Form>
      <Form.Text className="text-muted">
        Ex: USD (US Dollar) to JPY (Japanese Yen)
      </Form.Text>
    </Form.Group>
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
);

export default CurrencyExchangeRate;
