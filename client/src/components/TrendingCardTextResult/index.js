import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TrendingTextCurrency from '../../containers/TrendingTextCurrency';
import TrendingTextCryptorating from '../../containers/TrendingTextCryptorating';

const TrendingCardTextResult = (props) => {
  return (
    <Card className="text-center card-text-display">
      <Card.Header>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip id={'tooltip-top'}>
              Data result from the stock time series, foreign exchange rates
              (forex), or cyrptocurrencies
            </Tooltip>
          }
        >
          <Card.Title>Data Result</Card.Title>
        </OverlayTrigger>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          {props.isCurrency ? <TrendingTextCurrency data={props.data} /> : null}
          {props.isCrypto ? <TrendingTextCryptorating data={props.data} /> : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrendingCardTextResult;
