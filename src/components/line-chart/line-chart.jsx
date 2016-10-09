import React from 'react';
import d3 from 'd3';

import Axis from './axis.jsx';


export default class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.areaUpper = d3.svg.area;
    this.rangeLineUpper = d3.svg.line;
    this.areaLower = d3.svg.area;
    this.rangeLineLower = d3.svg.line;
    this.lineChart = d3.svg.line;

    if( props.plantData ){
      this.update_d3(props);
    }

// Add the limits to the top and bottom of the graph
    // this.area = d3.svg.area;

  }

  componentWillReceiveProps(newProps) {
    this.update_d3.bind(this, newProps);
  }

  update_d3(props) {

    let lowerBand = 810,
        upperBand = 824;




    // lowerBand = 785;
    // upperBand = 824;

    let dates = props.plantData.map(d => d.date);
    let data  = props.plantData.map(d => d[props.dataType]);

    let x = d3.time.scale()
              .range([ props.fullWidth - props.axisMargin, props.axisMargin ])
              .domain([ d3.min(dates), d3.max(dates) ]);

    let y = d3.scale.linear()
              .range([ props.height - props.bottomMargin, props.topMargin ])
              .domain([ d3.min(data) - 10, d3.max(data) + 10 ]);

    let line = this.lineChart()
                   .x(d => x(d.date))
                   .y(d => y(d[props.dataType]));

    let lowerArea = this.areaLower()
                        .x( d => x(d.date))
                        .y1(d => y(lowerBand))
                        .y0(y(d3.min(data) - 10));

    let upperArea = this.areaUpper()
                        .x( d => x(d.date))
                        .y1(y(d3.max(data) + 10))
                        .y0(d => y(upperBand));

    this.lineChart = line(props.plantData);
    this.areaLower = lowerArea(props.plantData);
    this.areaUpper = upperArea(props.plantData);

    console.log('this.areaUpper:', this.areaUpper);
  }

  render() {


    let water = this.props.plant_generic.water_s,
        light = this.props.plant_generic.light_s;

    //graphical limits = 50 - 440;
    let upperL = 0,
        lowerL = 0,
        upperM = 0,
        lowerM = 0;


    if (water === 'low' || water === 'medium-low'){
      upperM = 950;
      lowerM = 600;
    } else if (water === 'medium'){
      upperM = 1000;
      lowerM = 750;
    } else if (water === 'medium-high' || water === 'high'){
      upperM = 1050;
      lowerM = 800;
    }

    if (light === 'low' || light === 'medium-low'){
      upperL = 195;
      lowerL = 155;
    } else if (light === 'medium'){
      upperL = 250;
      lowerL = 165;
    } else if (light === 'medium-high' || light === 'high'){
      upperL = 275;
      lowerL = 195;
    }

    if(this.props.datatype === 'light'){
      lower = lowerL;
      higher = upperL;
    } else if (this.props.datatype === 'moisture'){
      lower = lowerM;
      higher = upperM;
    }

            let test = 100,
            test2 = 330;

    // let translate = `translate(0, ${ this.props.topMargin })`;
    if( this.props.plantData ){
      return(
        <g className="line-chart" >
        <path stroke="green" fill="none" strokeWidth=".5" d={ this.lineChart }></path>
          {/* <path stroke="red" strokeWidth="2" d={ this.areaLower }></path>
          <path stroke="red" strokeWidth="2" d={ this.areaUpper }></path> */}
        <path strokeDasharray="3,3" stroke="red" fill="none" strokeWidth="1" d={`M402, ${test}L83, ${test}`} ></path>
        <path strokeDasharray="3,3" stroke="red" fill="none" strokeWidth="1" d={`M402, ${test2}L83, ${test2}`} ></path>
        <Axis orientation="left" { ...this.props } strokeWidth=".3" />

        <Axis orientation="bottom" date={ true } { ...this.props } />
        </g>
      );
    } else {
      return null;
    }
  }
}
