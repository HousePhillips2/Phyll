import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';
export default class PlantForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (

      <div style={{margin:'50px', border: '2px'}}>
        <form id="newPlant" onSubmit={this._handleSubmit.bind(this)}>

          <div className="form-group row">
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-addon">Species</span>
                <input type="text" className="form-control" id="common_name" value={this.props.plantName} ref={input => this._plantName = input} readOnly/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-addon">Nickname</span>
                <input type="text" className="form-control" id="nickname" ref={input => this._plantNickName = input}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
                <div className="input-group">
                <span className="input-group-addon">Device ID</span>
                <input type="text" className="form-control" id="deviceId" ref={input => this._deviceId = input}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label for="" className="btn btn-secondary">
              Upload an Image <input type="file"  style={{display: 'none'}} id="image" />
            </label>
          </div>

          <button className="btn btn-success" type="submit" id="search">
            Add Me!
          </button>

        </form>
      </div>


    );
  }

  /*
  Table: api.users
    id:
    user_name:
    email:
    oauth_key:
    img:
  */

  _handleSubmit(e){
    e.preventDefault();
    let user_name = 'Casey';
    let oauth_key = 1;
    let email = 'aaaaaaaa@gmail.com';
    let user_img = 'https://figuya.com/uploads/product/profile_picture/6189/profile_Pop-Animation-79-Soul-Vorschau.jpg';
    let plant_img ='http://cdn1.bigcommerce.com/server4100/6ys4nr/product_images/uploaded_images/money-tree-bonsai-tree.jpg';
    //later on, use Oauth id to get user info (i.e. user_name, oauth_key, email, img) and send it along with the ajax request below;
    this._addPlant(this._plantName.value, this._plantNickName.value, this.props.plantId,this._deviceId.value, user_name,oauth_key,email,user_img,plant_img);
    //console.log(this._plantName.value, this._plantNickName.value, this.props.plantId,this._deviceId,'inside add plant input submit');

    this.context.router.push('/myDashboard');
  }
  _addPlant(plantName,plantNickName,plantId, deviceId,user_name, oauth_key,email, user_img, plant_img){
    $.ajax({
      method: 'POST',
      url: '/api/plantData',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({plantName, plantNickName,plantId,deviceId,user_name, oauth_key,email, user_img, plant_img}),
      success: (data) => {
        //console.log('redirect me to dashboard');
      }
    });
  }
}

PlantForm.contextTypes = {
  router: React.PropTypes.func.isRequired
};
