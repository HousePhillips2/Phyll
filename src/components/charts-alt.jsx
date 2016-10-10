import React from 'react';
import Measure from 'react-measure';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import { _loadRawData } from '../redux/actions/helpers';


class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {}
    };

  }

  componentWillMount() {
    this.props.rawData(this.props.user_plants[0].device_id);
  }

  render() {
    let { width } = this.state.dimensions
    
    if( !this.props.plantData ){
      return(
        <Measure onMeasure={(dimensions) => { this.setState({dimensions}) }} accurate={true} shouldMeasure={true}>
          <h2>Loading data into application...</h2>
        </Measure>
      );
    } else {
      let m_data = this.props.plantData.map(item => item.moisture);
      let l_data = this.props.plantData.map(item => item.light);
      let labels = this.props.plantData.map(item => item.date);
      let moisture = {
        labels: labels.filter((v, i) => i % 10 === 0),
        datasets: [{
          label: "Soil moisture readings over past 24 hours",
          fill: false,
          lineTension: 0.1,
          yHighlightRange : {
            begin: 500,
            end: 750
          },
          data: m_data.filter((v, i) => i % 10 === 0)
        }]
      };
      let light = {
        labels: labels.filter((v, i) => i % 10 === 0),
        datasets: [{
          label: "Average light readings during past 24 hours",
          fill: false,
          lineTension: 0.1,
          yHighlightRange : {
            begin: 100,
            end: 195
          },
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: l_data.filter((v, i) => i % 10 === 0)
        }]
      };
      let optionsM = {
        responsive: true,
        elements: {
          line: {
            cubicInterpolationMode: 'monotone'
          },
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              max: 1050
            }
          }]
        }
      }
      let optionsL = {
        responsive: true,
        elements: {
          line: {
            cubicInterpolationMode: 'monotone'
          },
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              max: 275
            }
          }]
        }
      }

      return(
        <div>
          <Line data={moisture} { ...this.props } options={optionsM} />
          <Line data={light} { ...this.props } options={optionsL} />
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
