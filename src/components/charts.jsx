import React from 'react';
import d3 from 'd3';
import $ from 'jquery';
import { connect } from 'react-redux';

import LineChart from './line-chart/index.jsx';
import { _loadRawData } from '../redux/actions/helpers';


class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.rawData('02:a3:a4:2a:1f:95');
  }

  render() {

    let params = {
      width: 500,
      height: 200,
      axisMargin: 83,
      topMargin: 50,
      bottomMargin: 50,
      // ADJUST this value to change size of SVG element
      fullWidth: 500
    };

    const props = Object.assign({}, this.props, params);

    if( !this.props.plantData ){
      return(
        <h2>Loading data into application...</h2>
      );
    } else {
      return(
        <div>
          <svg width={ params.fullWidth } height={ params.height }>
            <LineChart dataType="moisture" { ...props }/>
          </svg>
          <svg width={ params.fullWidth } height={ params.height }>
            <LineChart dataType="light" { ...props }/>
          </svg>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    plantData: state.getIn([ 'user', 'plant', 'data' ])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rawData: (deviceId) => dispatch(_loadRawData(deviceId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
