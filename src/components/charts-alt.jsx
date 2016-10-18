import React       from 'react';
import Measure     from 'react-measure';
import { connect } from 'react-redux';
import { Line }    from 'react-chartjs-2';

import { 
  _loadRawData }   from '../redux/actions/helpers';


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
    let { width } = this.state.dimensions;
    
    if( !this.props.plantData ){

      return(

        <Measure onMeasure={(dimensions) => { this.setState({dimensions}); }} accurate={true} shouldMeasure={true}>
          <h2 style={{marginLeft: -1 + 'rem'}}>Loading data into application...</h2>
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
          fill: true,
          lineTension: 0.1,
          data: m_data.filter((v, i) => i % 10 === 0)
        }]
      };
      let light = {
        labels: labels.filter((v, i) => i % 10 === 0),
        datasets: [{
          label: "Average light readings during past 24 hours",
          fill: true,
          lineTension: 0.1,
          data: l_data.filter((v, i) => i % 10 === 0)
        }]
      };
      let optionsM = {
        responsive: true,
        legend: {
          display: false,
        },
        elements: {
          line: {
            cubicInterpolationMode: 'monotone',
            stepped: false,
            borderColor: 'rgba(91, 192, 222, 1)',
            backgroundColor: 'rgba(49, 176, 213, .5)'
          },
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            ticks: {
              display: true,
              // beginAtZero: true,
              // max: 1050
            }
          }]
        }
      };
      let optionsL = {
        responsive: true,
        legend: {
          display: false,
        },
        elements: {
          line: {
            cubicInterpolationMode: 'monotone',
            stepped: true,
            borderColor: 'rgba(240, 173, 78, 1)',
            backgroundColor: 'rgba(236, 151, 31, .5)'
          },
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            ticks: {
              display: true,
              // beginAtZero: true,
              // max: 275
            }
          }]
        }
      };

      return(

        <Measure onMeasure={(dimensions) => { this.setState({dimensions}); }} accurate={true} shouldMeasure={true}>
          <div style={{marginLeft: -1 + 'rem'}} className="graff" className="text-muted">
            <p style={{marginTop: .25 + 'rem'}}>Average <span className="text-info">soil moisture</span> throughout past day. Range: 0 - 1050</p>
            <div><Line data={moisture} { ...this.props } width={width * .9} height={ 100 } options={optionsM} /></div>
            <p style={{marginTop: .5 + 'rem'}}>Average <span className="text-warning">light</span> during prior 24 hours. Range: 0 - 275</p>
            <div><Line data={light} { ...this.props } width={width * .9} height={ 100 } options={optionsL} /></div>
          </div>
        </Measure>

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
