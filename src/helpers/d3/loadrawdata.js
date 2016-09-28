// import d3 from 'd3';
var d3 = require('d3');

// Asynchronously LOAD JSON file, PARSE, and RETURN
export default function _loadRawData(url, id) {

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
      this.setState({ rawData });
    },
    error: error => {
      console.error(error);
      console.error(error.stack);
    }
  });

};
