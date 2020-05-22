import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';

const DashboardCardSearch = (props) => {
  return (
    <Card border="dark">
      <Card.Body>
        <Card.Title>Stock Search</Card.Title>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={props.stockInput}
            onChange={props.handleStockInputChange}
          />
          <Button
            variant="outline-info"
            type="submit"
            onClick={(e) => props.handleStockSearchSubmit(e)}
          >
            Search
          </Button>
        </Form>
        <br />
        <h3>Stock List</h3>
        {props.renderStockListItems()}
      </Card.Body>
    </Card>
  );
};

export default DashboardCardSearch;
