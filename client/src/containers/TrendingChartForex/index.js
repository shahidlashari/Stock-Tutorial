import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const chartData = [
//   {
//     name: '2019-12-31', open: 202.1300, high: 208.9300, low: 193.1700, close: 205.2500, amt: 2400,
//   },
//   {
//     name: '2020-01-31', open: 206.7500, high: 224.2000, low: 201.0600, close: 201.9100, amt: 2210,
//   },
//   {
//     name: '2020-02-28', open: 203.4400, high: 218.7650, low: 181.8200, close: 192.4700, amt: 2290,
//   },
//   {
//     name: '2020-03-31', open: 194.0300, high: 197.2400, low: 137.1006, close: 166.8000, amt: 2000,
//   },
//   {
//     name: '2020-04-30', open: 161.6150, high: 209.6900, low: 150.8300, close: 204.7100, amt: 2181,
//   },
// ];

export default class TrendingChartStock extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  state = {
    data: [],
    textFrom: '',
    textTo: '',
  }

  componentDidMount() {
    console.log(this.props.data);
    // console.log(chartData);

    const dataObj = {
      'Meta Data': {
        'From Symbol': this.props.data['Meta Data']['2. From Symbol'],
        'To Symbol': this.props.data['Meta Data']['3. To Symbol'],
      },
      'Time Series FX (Monthly)': {
        '2019-04-30': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-04-30']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-04-30']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-04-30']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-04-30']['4. close'],
        },
        '2019-05-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-05-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-05-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-05-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-05-31']['4. close'],
        },
        '2019-06-28': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-06-28']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-06-28']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-06-28']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-06-28']['4. close'],
        },
        '2019-07-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-07-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-07-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-07-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-07-31']['4. close'],
        },
        '2019-08-30': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-08-30']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-08-30']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-08-30']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-08-30']['4. close'],
        },
        '2019-09-30': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-09-30']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-09-30']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-09-30']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-09-30']['4. close'],
        },
        '2019-10-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-10-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-10-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-10-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-10-31']['4. close'],
        },
        '2019-11-29': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-11-29']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-11-29']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-11-29']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-11-29']['4. close'],
        },
        '2019-12-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2019-12-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2019-12-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2019-12-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2019-12-31']['4. close'],
        },
        '2020-01-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2020-01-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2020-01-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2020-01-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2020-01-31']['4. close'],
        },
        '2020-02-28': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2020-02-28']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2020-02-28']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2020-02-28']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2020-02-28']['4. close'],
        },
        '2020-03-31': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2020-03-31']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2020-03-31']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2020-03-31']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2020-03-31']['4. close'],
        },
        '2020-04-30': {
          '1. open': this.props.data['Time Series FX (Monthly)']['2020-04-30']['1. open'],
          '2. high': this.props.data['Time Series FX (Monthly)']['2020-04-30']['2. high'],
          '3. low': this.props.data['Time Series FX (Monthly)']['2020-04-30']['3. low'],
          '4. close': this.props.data['Time Series FX (Monthly)']['2020-04-30']['4. close'],
        },
      },
    };

    console.log(dataObj);

    function mapData() {
      const dataArr = [];
      const timeSeries = dataObj['Time Series FX (Monthly)'];
      for (const property in timeSeries) {
        const eachDate = {};
        eachDate.name = property;
        eachDate.open = parseFloat(timeSeries[property]['1. open']);
        eachDate.high = parseFloat(timeSeries[property]['2. high']);
        eachDate.low = parseFloat(timeSeries[property]['3. low']);
        eachDate.close = parseFloat(timeSeries[property]['4. close']);
        eachDate.amt = 2000;
        dataArr.push(eachDate);
      }
      return dataArr;
    }
    const dataChart = mapData();
    console.log(dataChart);

    const symbolFromText = dataObj['Meta Data']['From Symbol'];
    const symbolToText = dataObj['Meta Data']['To Symbol'];

    this.setState({ data: dataChart, textFrom: symbolFromText, textTo: symbolToText });
  }

  render() {
    // console.log(this.state.data)
    return (
      <div style={{ width: '100%', height: 350 }}>
        <h2>{this.state.textFrom} to {this.state.textTo} Exchange Rate for the Past Year (Monthly) </h2>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={400}
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="high" stroke="#e01d34" />
            <Line type="monotone" dataKey="low" stroke="#82ca9d" />
            <Line type="monotone" dataKey="close" stroke="#ffff0a" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
