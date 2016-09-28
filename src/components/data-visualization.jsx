import React from 'react';
import d3 from 'd3';
import $ from 'jquery';
import LineChart from './line-chart/index.jsx';


export default class DataVisualization extends React.Component {
  constructor() {
    super();
    this.state = {
      rawData: [ ]
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
      return(
        <div>
          <svg width={ 300 } height={ 200 }>
            <LineChart data={ this.state.rawData } />
          </svg>
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
        let rawData = data.date.slice(-288).map( (val, i) => {
          try {
            return {
              date     : new Date(data.date[i]),
              moisture : +(+data.moisture[i]).toFixed(2) || null,
              light    : +(+data.light[i]).toFixed(2) || null
            };
          } catch(err) {
            return null;
          }
        });

        this.setState({ rawData: rawData });
      },

      error: error => {
        console.error(error);
        console.error(error.stack);
      }
    });

  }
}
