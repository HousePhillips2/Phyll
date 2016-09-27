import React from 'react';
import $ from 'jquery';
import { LineChart } from 'react-easy-chart';


export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = { rawData: [] };
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
      const data = [this.state.rawData];
      console.log('data:', data);
      return(
        <div>
          <LineChart
            axes
            xType={ 'text' }
            dataPoints
            lineColors={ [ 'green', 'cyan' ] }
            width={ 500 }
            height={ 250 }
            interpolate={ 'cardinal' }
            data={ data }/>
        </div>
      );
    }
  }

  _loadRawData(url, id) {

    $.ajax({
      method: 'POST',
      url: '/io/retrieve',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({"deviceId": id}),
      success: data => {
         let rawData = data.date.map( (val, i) => {
          return {
            x       : val,
            // moisture    : Number(data.moisture[i]) || null,
            y       : Number(data.light[i]) || null
          };
        });
        this.setState({ rawData: rawData.slice(-20) });
      },
      error: error => {
        console.error(error);
        console.error(error.stack);
      }
    });
  }

}
