import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';
export default class EditPlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      alert: ({status: false, message: ''})
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({edit: !this.state.edit});
  }

  render() {

    let user_id = this.props.id;
    let garden  = this.props.garden.toArray();
    let user_plant = garden.filter((obj) => {return obj.user_id === user_id })[0];
    if(!user_plant){

      return null;
  
    } else {

      if (this.state.edit) {

        return (

          <div className="row content">
            <div className="content-top column container-fluid">
              <h4 className="media-heading pull-xs-left">Edit your { user_plant.plant_name }</h4>
              <span onClick={this.clickHandler} className="close-pane pull-xs-right"><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
              <div className="card-block container-fluid">
                <div style={{margin:10 + 'px'}}>

                  <form id="editPlant" onSubmit={this._handleUpdate.bind(this)}>

                    <div className="form-group row">
                      <div className="column">
                        <div className="input-group">
                          <span className="input-group-addon">Species</span>
                          <input type="text" className="form-control" id="common_name" defaultValue={user_plant.plant_name} ref={input => this.plant_name = input} readOnly/>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="column">
                        <div className="input-group">
                          <span className="input-group-addon">Nickname</span>
                          <input type="text" className="form-control" id="nickname" defaultValue={user_plant.plant_nickname} placeholder="optional" ref={input => this._plantNickName = input}/>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="column">
                          <div className="input-group">
                          <span className="input-group-addon">Device ID</span>
                          <input type="text" className="form-control" id="deviceId" defaultValue={user_plant.device_id} placeholder="see phyllOS documentation" ref={input => this._deviceId = input}/>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="column">
                          <div className="input-group">
                          <span className="input-group-addon">Telephone</span>
                          <input type="text" className="form-control" id="deviceId" defaultValue={user_plant.phone_number} placeholder="If you'd like watering notifications." ref={input => this._telephone = input}/>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="column">
                        <button className="btn btn-success pull-xs-left" type="submit" style={{marginTop: .25 + 'rem'}}>Save Your Changes</button> 
                        <button className="btn btn-danger pull-xs-right" onClick={this._handleDelete.bind(this)} style={{marginTop: .25 + 'rem'}}>Delete This Plant</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        );

      } else if (this.state.alert.status) {

        return (
          <div className="alert alert-warning alert-dismissible fade in" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            {this.state.alert.message}
          </div>
        );

      } else {

        return (
          <div className="row content">
            <div className="content-top column container-fluid">
              <h4 className="media-heading pull-xs-left">{`${ this.props.plant.plant_nickname }`}, your {`${ this.props.plant.plant_name }`}</h4>
              <span onClick={this.clickHandler} className="edit-pane pull-xs-right"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
            </div>
          </div>
        );

      }

    } 
  }


  _handleUpdate(e){
    e.preventDefault();
    this._updatePlant(this.props.id, this._deviceId.value, this._plantNickName.value, this._telephone.value);
    this.setState({edit: !this.state.edit});
    this.setState({alert: {status: true, message: 'Your changes have been recorded.'}});
    setTimeout(this.setState.bind(this,{alert: {status: false, message: ''}}), 5000);
  }

  _handleDelete(e){
    e.preventDefault();
    this._deletePlant(this._deviceId.value);
    this.setState({edit: !this.state.edit});
    this.setState({alert: {status: true, message: 'Your plant has been deleted.'}});
    setTimeout(this.setState.bind(this,{alert: {status: false, message: ''}}), 5000);
  }

  _updatePlant(user_id, device_id, plant_nickname, phone){
    $.ajax({
      method: 'POST',
      url: '/api/plantData/update',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({user_id, device_id, plant_nickname, phone}),
      success: (data) => {

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

      }
    });
  }
}


