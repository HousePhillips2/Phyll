import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';
export default class EditPlant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let user_id = this.props.id;
    let garden  = this.props.garden.toArray();
    let user_plant = garden.filter((obj) => {return obj.user_id === user_id })[0];
    if(!user_plant){
      return (<div></div>)
    } else {
      return (

        <div style={{margin:10 + 'px'}}>

          <form id="editPlant" onSubmit={this._handleUpdate.bind(this)}>

            <div className="form-group row">
              <div className="column">
                <div className="input-group">
                  <span className="input-group-addon">Species</span>
                  <input type="text" className="form-control" id="common_name" ref={input => this._plantName = input} readOnly/>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="column">
                <div className="input-group">
                  <span className="input-group-addon">Nickname</span>
                  <input type="text" className="form-control" id="nickname" defaultValue={user_plant.plant_nickname} ref={input => this._plantNickName = input}/>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="column">
                  <div className="input-group">
                  <span className="input-group-addon">Device ID</span>
                  <input type="text" className="form-control" id="deviceId" defaultValue={user_plant.device_id} ref={input => this._deviceId = input}/>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="column">
                  <div className="input-group">
                  <span className="input-group-addon">Telephone</span>
                  <input type="text" className="form-control" id="deviceId" defaultValue={user_plant.phone_number} ref={input => this._telephone = input}/>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="column">
                <button className="btn btn-success" type="submit" style={{marginTop: .25 + 'rem'}}>Update</button>
              </div>
            </div>
          </form>
          <div className="form-group row">
              <div className="column">
                <button className="btn btn-success" onClick={this._handleDelete.bind(this)} style={{marginTop: .25 + 'rem'}}>Delete</button>
              </div>
          </div>
        </div>
      );
    }
      
  }


  _handleUpdate(e){
    e.preventDefault();
    //console.log(this.props.id, this.props.plantFacts[0].id, this._deviceId.value, this._plantNickName.value, this._telephone.value)
    this._updatePlant(this.props.id, this._deviceId.value, this._plantNickName.value, this._telephone.value);
    // //here to redirect user
    this.props.toggleNewPlant(); // Closes new plant form
    //console.log(this._deviceId.value, this._plantNickName.value, this._telephone.value," in update")
  }

  _handleDelete(e){
    e.preventDefault();
    this._deletePlant(this._deviceId.value);
  }

  _updatePlant(user_id, device_id, plant_nickname, phone){
    $.ajax({
      method: 'POST',
      url: '/api/plantData/update',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({user_id, device_id, plant_nickname, phone}),
      success: (data) => {
        //need to redirect!
      }
    });
  }

    _deletePlant(device_id){
    $.ajax({
      method: 'POST',
      url: '/api/plantData/delete',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({device_id}),
      success: (data) => {
        //need to redirect!
      }
    });
  }
}


