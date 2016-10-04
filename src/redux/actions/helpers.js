import $ from 'jquery';
import { setUser, setPlants, setAdmin } from './actions';
import React from 'react';
import PlantFacts from '../../components/plantFacts.jsx';


export function _getUser() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin'
    }).then(user => {
      if( user ){
        dispatch(setUser(user));
      }
      // TODO: WRITE failed login action creator
    });
  };
}

export function _getPlants() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'api/plantFacts'
    }).then(plants => {
      dispatch(setPlants(plants));
    });
  };
}

export function _fetchPlant(plant){
  return dispatch => {
    $.ajax({
      method: 'POST',
      url: 'api/plantFacts',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ plant: plant }),
      success: (plantFacts) => {
        console.log(plant, plantFacts)
        if(plantFacts.length!==0){
          return (
            <PlantFacts plantFacts={plantFacts[0]} user={ this.props.user }/>,
            document.getElementById('plantFact')
          );
        }
      }
    });
  };
}

export function _getAdmin() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'api/admin'
    }).then(admin => {
      dispatch(setAdmin(admin));
    });
  };
}
