import React from 'react';
import d3 from 'd3';
import $ from 'jquery';
import LineChart from './line-chart/index.jsx';


export default class Charts extends React.Component {
  constructor() {
    super();
    this.state = {
      moisture: [ ],
      rawData:  [ ],
      dates:    [ ],
      light:    [ ]
    };
  }

  componentWillMount() {
    this._loadRawData('http://localhost:8888/io/retrieve', '02:a3:a4:2a:1f:95');
  }

  render() {

    let params = {
      width: 500,
      height: 200,
      axisMargin: 83,
      topMargin: 50,
      bottomMargin: 50,
      value: (d) => d.base_salary,
      // ADJUST this value to change size of SVG element
      fullWidth: 500
    };

    if( !this.state.rawData.length ){
      return(
        <h2>Loading data into application...</h2>
      );
    } else {
      return(
        <div>
          <svg width={ params.fullWidth } height={ params.height }>
            <LineChart { ...params } data={ this.state.rawData } />
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

        this.setState({ date: data.date.slice(-288) });
        this.setState({ light: data.light.slice(-288) });
        this.setState({ moisture: data.moisture.slice(-288) });

        let rawData = data.date.slice(-288).map( (val, i) => {
          try {
            return {
              date     : new Date(this.state.date[i]),
              moisture : +(+this.state.moisture[i]).toFixed(2) || null,
              light    : +(+this.state.light[i]).toFixed(2) || null
            };
          } catch(err) {
            console.error('Data point undefined and set to null.');
            return null;
          }
        });

        this.setState({ rawData: rawData.slice(-288) });
      },

      error: error => {
        console.error(error);
        console.error(error.stack);
      }
    });

  }
}
