import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ForeignMonthly = () => (
  <Form>
    <Form.Group controlId="formForeignMonthly">
      <Form.Label>Foreign Exchange Rate Monthly</Form.Label>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="EUR" />
          </Col>
          <Col>
            <Form.Control placeholder="USD" />
          </Col>
        </Form.Row>
      </Form>
      <Form.Text className="text-muted">
        Ex: EUR (Euro) to USD (US Dollar)
      </Form.Text>
    </Form.Group>
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
);

export default ForeignMonthly;
