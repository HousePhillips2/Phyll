import React from 'react';
import d3 from 'd3';

import Axis from './axis.jsx';


export default class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.lineChart = d3.svg.line;
    if( props.plantData ){
      this.update_d3(props);
    }
  }

  componentWillReceiveProps(newProps) {
    this.update_d3.bind(this, newProps);
  }

  update_d3(props) {

    let dates = props.plantData.map(d => d.date);
    let data  = props.plantData.map(d => d[props.dataType]);

    console.log('data:', data);

    let x = d3.time.scale()
              .range([ props.fullWidth - props.axisMargin, props.axisMargin ])
              .domain([ d3.min(dates), d3.max(dates) ]);

    let y = d3.scale.linear()
              .range([ props.height - props.bottomMargin, props.topMargin ])
              .domain([ d3.min(data) - 10, d3.max(data) + 10 ]);

    let line = this.lineChart()
                   .x(d => x(d.date))
                   .y(d => y(d[props.dataType]));

    this.lineChart = line(props.plantData);
  }

  render() {

    let translate = `translate(0, ${ this.props.topMargin })`;
    if( this.props.plantData ){
      return(
        <g className="line-chart">
        <path stroke="blue" fill="none" strokeWidth="2" d={ this.lineChart }></path>
        {/* <Axis orientation="left" { ...this.props } /> */}
        <Axis orientation="bottom" date={ true } { ...this.props } />
        </g>
      );
    } else {
      return null;
    }
  }
}
