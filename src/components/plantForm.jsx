import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';
export default class PlantForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    const plant = this.props.plantFacts[0];
    //console.log(plant.id,'plant');
    let submitButton;

    //console.log(this.props)
    // TODO: add login handling to link when navbar has been refactored

    if(this.props.loggedIn){
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
                <input type="text" className="form-control" id="common_name" value={plant.plant_name} ref={input => this._plantName = input} readOnly/>
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
            <div className="column">
                <div className="input-group">
                <span className="input-group-addon">Telephone</span>
                <input type="text" className="form-control" id="deviceId" placeholder="If you'd like watering notifications." ref={input => this._telephone = input}/>
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
    //console.log(this.props.id, this.props.plantFacts[0].id, this._deviceId.value, this._plantNickName.value, this._telephone.value)
    this._addPlant(this.props.id, this.props.plantFacts[0].id, this._deviceId.value, this._plantNickName.value, this._telephone.value)
    //here to redirect user
  }
  _addPlant(user_id, plant_id, device_id, plant_nickname, phone){
    $.ajax({
      method: 'POST',
      url: '/api/plantData',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({user_id, plant_id, device_id, plant_nickname, phone}),
      success: (data) => {
        //need to redirect!
      }
    });
  }
}

// PlantForm.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };
