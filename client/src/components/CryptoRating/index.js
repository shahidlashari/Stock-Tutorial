import React from "react";
import { Form, Button } from "react-bootstrap";

const Cryptorating = () => (
  <Form>
    <Form.Group controlId="formCryptoRating">
      <Form.Label>Cryptorating</Form.Label>
      <Form.Control type="text" placeholder="Enter stock symbol" />
      <Form.Text className="text-muted">
        Ex: TM (Toyota), BAC (Bank of America), WFC (Wells Fargo), etc.
      </Form.Text>
    </Form.Group>
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
)

export default Cryptorating;