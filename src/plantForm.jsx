import { Router } from 'react-router';

export default class PlantForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{margin:'50px', border: '2px'}}>
        <form id="searchform" onSubmit={this._handleSubmit.bind(this)}>
          <div className="form-incline">
            <label for="common_name">Common Name:</label>
            <input type="text" className="form-control" id="common_name" value={this.props.plantName} ref={input => this._plantName = input}/>
          </div>
          <div className="form-incline">
            <label for="nickname">Nickname:</label>
            <input type="text" className="form-control" id="nickname" ref={input => this._plantNickName = input}/>
          </div>
          <div className="form-incline">
            <label for="image">Image:</label>
            <input type="file" className="form-control" id="image" />
          </div>
            <button className="btn btn-default" style={{color:'green'}} type="submit" id="search" >Add Me!</button>
        </form>
      </div>
    );
  }
  _handleSubmit(e){
    e.preventDefault();
    this._addPlant(this._plantName.value, this._plantNickName.value);
    //console.log(this._plantName.value, this._plantNickName.value, 'inside add plant input submit')
    this.context.router.push('/myDashboard');
  }
  _addPlant(plantName,plantNickName){
    $.ajax({
      method: 'POST',
      url: '/plantInput',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({plantName, plantNickName}),
      success: (data) => {
        console.log('redirect me to dashboard');
      }
    })
  }
}

PlantForm.contextTypes = {
  router: React.PropTypes.func.isRequired
};


