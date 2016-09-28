import React from 'react';
import d3 from 'd3';

import Axis from './axis.jsx';


export default class LineChart extends React.Component {
  constructor(props) {
    super();

    this.lineChart = d3.svg.line;

    this.update_d3(props);
  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  }

  update_d3(props) {
    let dates = props.data.map(d => d.date);
    let light = props.data.map(d => d.light);

    console.log('props.data:', props.data);

    let x = d3.time.scale()
              .range([ props.fullWidth - props.axisMargin, props.axisMargin ])
              .domain([ d3.min(dates), d3.max(dates) ]);

    let y = d3.scale.linear()
              .range([ props.height - props.bottomMargin, props.topMargin ])
              .domain([ d3.min(light) - 10, d3.max(light) + 10 ]);

    let line = this.lineChart()
                   .x(d => x(d.date))
                   .y(d => y(d.light));

    this.lineChart = line(props.data);
  }

  render() {
    let translate = `translate(0, ${ this.props.topMargin })`;

    return(
      <g className="line-chart">
        <path stroke="blue" fill="none" strokeWidth="2" d={ this.lineChart }></path>
        <Axis orientation="left" { ...this.props } />
        <Axis orientation="bottom" date={ true } { ...this.props } />
      </g>
    );
  }
}
