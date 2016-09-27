import React, { Component } from 'react';
import d3 from 'd3';


class Histogram extends Component {
  constructor(props) {
    super();

    this.histogram  = d3.layout.histogram();
    this.widthscale = d3.scale.linear();
    this.yScale     = d3.scale.linear();

    this.update_d3(props);
  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  }

  update_d3(props) {
    this.histogram
      .bins(props.bins)
      .value(props.value);

    let bars    = this.histogram(props.data);
    let counts  = bars.map((d) => d.light);

    this.widthscale;

  }

  makeBar(bar) {
    let percent = bar.y / this.props.data.length * 100;

    let props = {
      percent: percent,
      x: this.props.axisMargin,
      y: this.yScale(bar.x),
      width: this.widthScale(bar.y),
      height: this.yScale(bar.dx),
      key: "histogram-bar-" + bar.x + "-" + bar.y
    };

    return(
      <Histogram { ...props } />
    );
  }

  render() {

    let translate = `translate(0, ${this.props.topMargin})`;
    let bars      = this.histogram(this.props.data);

    return(
      <g className="histogram" transform={ translate }>
        <g className="bars">
          { bars.map(this.makeBar.bind(this)) }
        </g>
      </g>
    );
  }
}


class HistogramBar extends Component{
  render() {

    let translate = `translate( ${this.props.x}, ${this.props.y} )`;

    // NOT RENDER bars which are too small
    if (this.props.percent < 1) {
      label = this.props.percent.toFixed(2)+"%";
    }
    if (this.props.width < 20) {
      label = label.replace("%", "");
    }
    if (this.props.width < 10) {
      label = "";
    }

    return(
      <g transform={ translate } className="bar">
        <rect width={ this.props.width }
          height={ this.props.height - 2 }
          transform={ translate(0, 1) }>
        </rect>
        <text textAnchor = "end"
          x={ this.props.width + 5 }
          y={ this.props.heigh / 2 + 3 } >
          { label }
        </text>
      </g>
    );
  }
}
