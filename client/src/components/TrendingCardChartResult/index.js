import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TrendingChartStock from '../../containers/TrendingChartStock';
import TrendingChartForex from '../../containers/TrendingChartForex';
import TrendingChartDigital from '../../containers/TrendingChartDigital';

const TrendingCardResult = (props) => {
  return (
    <Card className="text-center card-chart-display">
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
          {props.isStock ? <TrendingChartStock data={props.data} /> : null}
          {props.isForex ? <TrendingChartForex data={props.data} /> : null}
          {props.isDigital ? <TrendingChartDigital data={props.data} /> : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrendingCardResult;
