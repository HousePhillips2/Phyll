import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

class Axis extends Component {

  constructor() {
    super();

    this.yScale = d3.scale.linear;
    this.axis = d3.svg.axis()
                  .scale(this.yScale)
                  .orient("left")
                  .tickFormat((d) => "$" + this.yScale.tickFormat()(d));

    this.update_d3(props);
  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  }

  render() {
    let translate = `translate( ${ this.props.axisMargin - 3 }, 0 )`;

    return(
      <g className="axis" transform={ translate }>
      </g>
    );
  }
}

export default Axis;
