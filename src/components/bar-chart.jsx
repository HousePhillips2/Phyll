import d3 from 'd3';
import React from 'react';
import $ from 'jquery';


export default class barChart extends React.Component {
  constructor(props) {
    super(props);

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
    }

    let params = {
      bins: 20,
      width: 500,
      height: 500,
      axisMargin: 83,
      topMargin: 10,
      bottomMargin: 5,
      value: (d) => d.light
    };

    fullWidth = 700;

    return(
      <div>
        <svg>
          <svg width={ fullWidth } height={ params.height }>
            <Histogram { ...params } data={ this.state.rawData } />
          </svg>
        </svg>
      </div>
    );
  }

  // TODO: REFACTOR into senior component
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
            date        : val,
            moisture    : data.moisture[i] || null,
            light       : data.light[i] || null
          };
        });
        console.log(rawData);
        this.setState({ rawData });
      },
      error: error => {
        console.error(error);
        console.error(error.stack);
      }
    });

  }

}
