import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const DigitalMonthly = () => (
  <Form>
    <Form.Group controlId="formDigitalMonthly">
      <Form.Label>Digital Currency Monthly</Form.Label>
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>Digital Currency</Form.Label>
            <Form.Control type="text" placeholder="BTC"/>
          </Col>
          <Col>
            <Form.Label>Physical Currency</Form.Label>
            <Form.Control type="text" placeholder="CNY"/>
          </Col>
        </Form.Row>
      </Form>
      <Form.Text className="text-muted">
        Ex: CNY (Chinese Yuan), MXN (Mexican Peso), KRW (South Korean Won), etc.
      </Form.Text>
    </Form.Group>
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
)

export default DigitalMonthly;