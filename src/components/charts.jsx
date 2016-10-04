import React from 'react';
import d3 from 'd3';
import $ from 'jquery';
import LineChart from './line-chart/index.jsx';


export default class Charts extends React.Component {
  constructor() {
    super();
    this.state = {
      moisture: [ ],
      rawData:  [ ],
      dates:    [ ],
      light:    [ ]
    };
  }

  componentWillMount() {
    this._loadRawData('http://localhost:8888/io/retrieve', '02:a3:a4:2a:1f:95');
  }

  render() {

    let params = {
      width: 500,
      height: 200,
      axisMargin: 83,
      topMargin: 50,
      bottomMargin: 50,
      value: (d) => d.base_salary,
      // ADJUST this value to change size of SVG element
      fullWidth: 500
    };

    if( !this.state.rawData.length ){
      return(
        <h2>Loading data into application...</h2>
      );
    } else {
      const props = Object.assign({}, this.props, params);
      return(
        <div>
          <svg width={ params.fullWidth } height={ params.height }>
            <LineChart { ...props } />
          </svg>
        </div>
      );
    }
  }
}
