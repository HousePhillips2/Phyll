import React from 'react';
import d3 from 'd3';

import Axis from './axis.jsx';


export default class LineChart extends React.Component {
  constructor(props) {
    super(props);

    if( props.plantData ){
      this.update_d3(props);
    }

  }

  componentWillUpdate(newProps) {
    this.update_d3(newProps);
  }

  update_d3(props) {

    let water = props.plant_generic.water_s,
        light = props.plant_generic.light_s;

    let lowerBand = 785;
    let upperBand = 824;

    if( props.dataType === 'moisture' ){
      if (water === 'low' || water === 'medium-low'){
        upperBand = 950;
        lowerBand = 600;
      } else if (water === 'medium'){
        upperBand = 1000;
        lowerBand = 750;
      } else if (water === 'medium-high' || water === 'high'){
        upperBand = 1050;
        lowerBand = 800;
      }
    }

    if( props.dataType === 'light' ){
      if (light === 'low' || light === 'medium-low'){
        upperBand = 195;
        lowerBand = 155;
      } else if (light === 'medium'){
        upperBand = 250;
        lowerBand = 165;
      } else if (light === 'medium-high' || light === 'high'){
        upperBand = 275;
        lowerBand = 195;
      }
    }

    this.lineChart = d3.svg.line;
    this.areaUpper = d3.svg.area;
    this.rangeLineUpper = d3.svg.line;
    this.areaLower = d3.svg.area;
    this.rangeLineLower = d3.svg.line;

    let dates = this.props.plantData.map(d => d.date);
    let data  = this.props.plantData.map(d => d[props.dataType]);

    this.lowerBound = d3.min(data) < lowerBand ? d3.min(data) : lowerBand;
    this.upperBound = d3.max(data) > upperBand ? d3.max(data) : upperBand;

    let x = d3.time.scale()
              .range([ props.fullWidth - props.axisMargin, props.axisMargin ])
              .domain([ d3.min(dates), d3.max(dates) ]);

    let y = d3.scale.linear()
              .range([ props.height - props.bottomMargin, props.topMargin ])
              .domain([ this.lowerBound - 10, this.upperBound + 10 ]);

    let line = this.lineChart()
                   .x(d => x(d.date))
                   .y(d => y(d[props.dataType]));

    let lowerArea = this.areaLower()
                        .x( d => x(d.date))
                        .y1(d => y(lowerBand))
                        .y0(y(this.lowerBound - 10));

    let upperArea = this.areaUpper()
                        .x( d => x(d.date))
                        .y1(y(this.upperBound + 10))
                        .y0(d => y(upperBand));

    this.lineChart = line(props.plantData);
    this.areaLower = lowerArea(props.plantData);
    this.areaUpper = upperArea(props.plantData);
  }

  render() {

    let translate = `translate(0, ${ this.props.topMargin })`;
    //     <path strokeDasharray="3,3" stroke="red" fill="none" strokeWidth="1" d={`M402, ${test}L83, ${test}`} ></path>
    //     <path strokeDasharray="3,3" stroke="red" fill="none" strokeWidth="1" d={`M402, ${test2}L83, ${test2}`} ></path>
    //     <Axis orientation="left" { ...this.props } strokeWidth=".3" />
    //
    //     <Axis orientation="bottom" date={ true } { ...this.props } />

    if( this.props.plantData ){
      return(
        <g className="line-chart">
          <path strokeWidth="2" d={ this.areaLower } fill="rgba(128, 0, 0, 0.22)"></path>
          <path strokeWidth="2" d={ this.areaUpper } fill="rgba(128, 0, 0, 0.22)"></path>
          <path stroke="green" fill="none" strokeWidth=".75" d={ this.lineChart }></path>
          {/* <Axis orientation="left" { ...this.props }/>
          <Axis orientation="bottom" date={ true } { ...this.props } /> */}
        </g>
      );
    } else {
      return null;
    }
  }
}
