import d3 from 'd3';

// Asynchronously LOAD JSON file, PARSE it, and RETURN data 
export default function _loadRawData() {
  d3.json(this.props.url)
    .get((error, rows) => {
      if( error ){
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({rawData: rows});
      }
    });
}
