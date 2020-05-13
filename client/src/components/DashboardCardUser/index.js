import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const DashboardCardUser = (props) => {
  // Log Out Button
  // Clears local storage and then sends the user to the Home page
  const handleLogOutSubmit = () => {
    localStorage.clear('currentStockBroker');
    props.history.push('/');
  };

  return (
    <div>
      <Card bg="light" border="dark" className="dashboard-user-card">
        <Card.Body>
          <Card.Title>User Information </Card.Title>
          <Card.Text>
            ID: {props.id}
            <br />
            Username: {props.username}
            <br />
            Email: {props.email}
            <br />
            <Button
              variant="outline-info"
              className="dashboard-logout-button"
              onClick={(e) => handleLogOutSubmit(e)}
            >
              Log Out
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="light" border="dark" className="dashboard-budget-card">
        <Card.Body>
          <Card.Title>User's Initial Budget:</Card.Title>
          <Card.Title className="dashboard-budget-value">
            ${props.initial_budget}
          </Card.Title>
          <Card.Title>User's Balance: </Card.Title>
          <Card.Title className="dashboard-balance-value">
            ${props.balance}
          </Card.Title>
        </Card.Body>
      </Card>

      <Card bg="light" border="dark" className="dashboard-watchlist-card">
        <Card.Body>
          <Card.Title>Stock Watchlist</Card.Title>
          <Card.Text key="savedStocks">{props.renderWatchListItems()}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(DashboardCardUser);
