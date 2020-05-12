import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TrendingResultTextCurrency from '../../containers/TrendingResultTextCurrency';
import TrendingResultTextCryptorating from '../../containers/TrendingResultTextCrytorating';

const TrendingCardResultText = (props) => {
  return (
    <Card className="text-center card-text-display" border="dark">
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
          <Card.Title className="trending-text-title">Data Result</Card.Title>
        </OverlayTrigger>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          {props.isCurrency ? <TrendingResultTextCurrency data={props.data} /> : null}
          {props.isCrypto ? <TrendingResultTextCryptorating data={props.data} /> : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrendingCardResultText;
