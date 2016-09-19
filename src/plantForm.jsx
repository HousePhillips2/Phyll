export default class PlantForm extends React.Component {
  render() {
    return (
      <div style={{margin:'50px', border: '2px'}}>
        <div className="form-incline">
          <label for="common_name">Common Name:</label>
          <input type="text" className="form-control" id="common_name" value={this.props.plantName}/>
        </div>
        <div className="form-incline">
          <label for="nickname">Nickname:</label>
          <input type="text" className="form-control" id="nickname" />
        </div>
        <div className="form-incline">
          <label for="image">Image:</label>
          <input type="file" className="form-control" id="image" />
        </div>
          <button className="btn btn-default" style={{color:'green'}} type="submit" id="search" >Add Me!</button>
      </div>
    );
  }
}