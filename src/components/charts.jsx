import React       from 'react';
import d3          from 'd3';
import $           from 'jquery';
import { connect } from 'react-redux';

import LineChart from './line-chart/index.jsx';
import { _loadRawData } from '../redux/actions/helpers';


class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };

  }

  componentWillMount() {
    console.log('vot!', this.props.user_plants[0]);
    this.props.rawData(this.props.user_plants[0].device_id);
  }

  componentDidMount() {
    $( window ).resize(() => {
      this.setState({windowWidth: window.innerWidth});
      this.render();
    });
  }

  render() {

    let params = {
      width: this.state.windowWidth * 0.3465,
      height: 390,
      axisMargin: 83,
      leftMargin: 50,
      topMargin: 50,
      bottomMargin: 50,
      // ADJUST this value to change size of SVG element
      fullWidth: this.state.windowWidth * 0.3465
    };

    const props = Object.assign({}, this.props, params);

    if( !this.props.plantData ){

      return(

        <h2>Loading data into application...</h2>

      );

    } else {
      
      return(

        <div>
          <span id="moisturechart">
            <svg width={ params.fullWidth } height={ params.height }>

              <LineChart dataType="moisture" { ...props }/>
              
            </svg>
          </span>
          <span id="lightchart">
            <svg width={ params.fullWidth } height={ params.height }>

              <LineChart dataType="light" { ...props }/>

            </svg>
          </span>
        </div>

      );

    }
  }
}

function mapStateToProps(state) {
  return {
    plantData: state.getIn([ 'user', 'plant', 'data' ]),
    userID   : state.getIn([ 'user', 'id'])
    // device: state.
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rawData: (deviceId) => dispatch(_loadRawData(deviceId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
