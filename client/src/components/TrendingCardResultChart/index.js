import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TrendingResultChartStock from '../../containers/TrendingResultChartStock';
import TrendingResultChartForex from '../../containers/TrendingResultChartForex';
import TrendingResultChartDigital from '../../containers/TrendingResultChartDigital';

const TrendingCardResultChart = (props) => {
  return (
    <Card className="text-center card-chart-display" border="dark">
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
          <Card.Title className="trending-chart-title">Data Result</Card.Title>
        </OverlayTrigger>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          {props.isStock ? <TrendingResultChartStock data={props.data} /> : null}
          {props.isForex ? <TrendingResultChartForex data={props.data} /> : null}
          {props.isDigital ? <TrendingResultChartDigital data={props.data} /> : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrendingCardResultChart;
