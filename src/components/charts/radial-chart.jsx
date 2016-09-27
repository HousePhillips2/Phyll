import { RadialBarChart, RadialBar, Legend } from 'recharts';
import React from 'react';

export default class Chart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rawData: []
    };
  }

  componentWillMount() {
    this._loadRawData('http://localhost:8888/io/retrieve', '02:a3:a4:2a:1f:95');
  }

  render() {
    if( !this.state.rawData.length ){
      return(
        <h2>Loading data into application...</h2>
      );
    } else {
      const data = this.state.rawData;
      const style = {
      	top: 0,
      	left: 350,
      	lineHeight: '24px'
      };
      const margin = { top: 5, right: 5, bottom: 5, left: 5 };
      return(
        <div>
          <RadialBarChart
            maxAngle={ 360 }
            width={ 1000 }
            height={ 600 }
            cx={ '50%' }
            cy={ '50%' }
            innerRadius={ 20 }
            outerRadius={ 140 }
            barSize={ 27 }
            margin={ margin }
            data={ data }
            >

            <RadialBar
              minAngle={15}
              // label background clockWise={true}
              dataKey='light'
              startAngle={90}
              endAngle={-270}
              />

          </RadialBarChart>
        </div>
      );
    }
  }

}
