import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';
export default class PlantForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    let submitButton;

    // TODO: add login handling to link when navbar has been refactored

    if (user) {
      submitButton = <button className="btn btn-success" type="submit" id="addImage" style={{marginTop: .25 + 'rem'}}>Add Me!</button>;
    } else {
      submitButton = <div className="alert alert-danger" role="alert"><strong>Yikes!</strong> Looks like you need to <a href="#" className="alert-link">log in</a>.</div>;
    }

    return (

      <div style={{margin:10 + 'px'}}>

        <form id="newPlant" onSubmit={this._handleSubmit.bind(this)}>

          <div className="form-group row">
            <div className="column">
              <div className="input-group">
                <span className="input-group-addon">Species</span>
                <input type="text" className="form-control" id="common_name" value={this.props.plantName} ref={input => this._plantName = input} readOnly/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="column">
              <div className="input-group">
                <span className="input-group-addon">Nickname</span>
                <input type="text" className="form-control" id="nickname" ref={input => this._plantNickName = input}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="column">
                <div className="input-group">
                <span className="input-group-addon">Device ID</span>
                <input type="text" className="form-control" id="deviceId" ref={input => this._deviceId = input}/>
              </div>
            </div>
          </div>

          <div className="form-group row">

            {/* This image upload feature is going to take more handling to make work than an html file input field.
              It's presently beyond scope in terms of things we need to make the site work. */}

            {/*<div className="column">
              <label className="btn btn-secondary">
                Upload an Image <input type="file"  style={{display: 'none'}} id="image" />
              </label>
            </div>*/}

            <div className="column">
              { submitButton }
            </div>
          </div>
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

// PlantForm.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };
