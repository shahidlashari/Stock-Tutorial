import React, { Component } from 'react';

class TrendingTextCurrency extends Component {
  state = {
    textSymbol: '',
    textName: '',
    textFcasRating: '',
    textFcasColor: '',
    textFcasScore: '',
    textDeveloperScore: '',
    textMarketScore: '',
    textUtilityScore: '',
    textLastRefreshed: '',
  }

  componentDidMount() {
    const symbol = this.props.data['Crypto Rating (FCAS)']['1. symbol'];
    const name = this.props.data['Crypto Rating (FCAS)']['2. name'];
    const fcasRating = this.props.data['Crypto Rating (FCAS)']['3. fcas rating'];
    const fcasScore = this.props.data['Crypto Rating (FCAS)']['4. fcas score'];
    const developerScore = this.props.data['Crypto Rating (FCAS)']['5. developer score'];
    const marketMaturityScore = this.props.data['Crypto Rating (FCAS)']['6. market maturity score'];
    const utilityScore = this.props.data['Crypto Rating (FCAS)']['7. utility score'];
    const lastRefreshed = this.props.data['Crypto Rating (FCAS)']['8. last refreshed'];

    if (fcasRating === 'Superb') {
      const colorSuperb = '#009919';
      this.setState({ textFcasColor: colorSuperb });
    } else if (fcasRating === 'Attractive') {
      const colorAttractive = '#73f573';
      this.setState({ textFcasColor: colorAttractive });
    } else if (fcasRating === 'Basic') {
      const colorBasic = '#f1fc9a';
      this.setState({ textFcasColor: colorBasic });
    } else if (fcasRating === 'Caution') {
      const colorCaution = '#ebba65';
      this.setState({ textFcasColor: colorCaution });
    } else if (fcasRating === 'Fragile') {
      const colorFragile = '#e33d3d';
      this.setState({ textFcasColor: colorFragile });
    }

    this.setState({
      textSymbol: symbol,
      textName: name,
      textFcasRating: fcasRating,
      textFcasScore: fcasScore,
      textDeveloperScore: developerScore,
      textMarketScore: marketMaturityScore,
      textUtilityScore: utilityScore,
      textLastRefreshed: lastRefreshed,
    });
  }

  render() {
    return (
      <div>
        <p style={{ fontSize: '42px' }}>{this.state.textSymbol} ({this.state.textName}) Crypto Rating</p>
        <p style={{ fontSize: '24px' }}>FCAS Rating and Score: <strong style={{ backgroundColor: this.state.textFcasColor }}>{this.state.textFcasRating}</strong> | <strong>{this.state.textFcasScore}</strong></p>
        <p style={{ fontSize: '24px' }}>Developer Score: <strong>{this.state.textDeveloperScore}</strong></p>
        <p style={{ fontSize: '24px' }}>Market Maturity Score: <strong>{this.state.textMarketScore}</strong></p>
        <p style={{ fontSize: '24px' }}>Utility Score: <strong>{this.state.textUtilityScore}</strong></p>
        <p style={{ fontSize: '16px' }}>Last Refreshed: <strong>{this.state.textLastRefreshed}</strong></p>
      </div>
    );
  }
}

export default TrendingTextCurrency;
