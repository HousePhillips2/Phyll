import { Router } from 'react-router';

export default class PlantForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.plantName,"plant name inside PlantForm");
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
    let user_name = 'Phoebe Y Maio';
    let oauth_key = 1;
    let email = 'aaaaaaaa@gmail.com';
    let user_img = 'http://www.ikea.com/ie/en/images/range-introduction/ikea-plant-and-pot__1364299621645-s4.jpg';
    let deviceId = 100;
    let plant_img ='http://gardeners.s3.amazonaws.com/p/VETOM30892_3.jpg';
    //later on, use Oauth id to get user info (i.e. user_name, oauth_key, email, img) and send it along with the ajax request below;
    this._addPlant(this._plantName.value, this._plantNickName.value, this.props.plantId,user_name,oauth_key,email,user_img,plant_img);
    //console.log(this._plantName.value, this._plantNickName.value, this.props.plantId,'inside add plant input submit')

    this.context.router.push('/myDashboard');
  }
  _addPlant(plantName,plantNickName,plantId, user_name, oauth_key,email, user_img, plant_img){
    $.ajax({
      method: 'POST',
      url: '/api/plantData',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({plantName, plantNickName,plantId,user_name, oauth_key,email, user_img, plant_img}),
      success: (data) => {
        console.log('redirect me to dashboard');
      }
    });
  }
}

PlantForm.contextTypes = {
  router: React.PropTypes.func.isRequired
};


