import React from 'react';
import d3 from 'd3';

export default class LineChart extends React.Component {
  constructor(props) {
    super();

    this.widthScale = d3.time.scale()
                        .range([ 0, 1 ]);
    this.yScale = d3.scale.linear();
    this.lineChart = d3.svg.line;
    this.update_d3(props);
  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  }

  update_d3(props) {
    // TODO: LOOK at D3.js documentation and figure this part out

    let dates = props.data.map(d => d.date);

    let x = d3.time.scale()
              .range([ 0 , 300 ])
              .domain([ d3.min(dates), d3.max(dates) ]);

    let line = this.lineChart()
                   .x(d => x(d.date))
                   .y(d => d.light);

    this.lineChart = line(props.data);

    // console.log('line:', this.lineChart(props.data));
  }

  makeLine(line) {

  }

  render() {
    // let translate = `translate(0, ${ this.props.topMargin })`;
    // let line = this.lineChart(this.props.data);

    return(
      <path stroke="blue" fill="none" stroke-width="2" d={ this.lineChart }>
      </path>
    );
  }
}
