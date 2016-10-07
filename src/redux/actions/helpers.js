import $ from 'jquery';
import { setUser, setPlants, setGarden, setPlantFacts, setUserPlantData } from './actions';
import React from 'react';
import PlantFacts from '../../components/plantFacts.jsx';


export function _getUser() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'vendor/auth/loggedin'
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
    }).then(plantFacts => {
      dispatch(setPlantFacts(plantFacts));
    });
  };
}

export function _getGarden() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'api/garden'
    }).then(garden => {
      dispatch(setGarden(garden));
    });
  };
}

export function _loadRawData(id) {
  return dispatch => {
    $.ajax({
      method: 'POST',
      url: 'io/retrieve',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ "deviceId": id }),
    }).then(data => {
      let rawData = data.date.slice(-288).map( (val, i) => {
        try {
          return {
            date     : new Date(val),
            moisture : +(+data.moisture.slice(-288)[i]).toFixed(2) || null,
            light    : +(+data.light[i]).toFixed(2) || null
          };
        } catch(err) {
          console.error('Data point undefined and set to null.');
          return null;
        }
      });
      dispatch(setUserPlantData(rawData));
    }, error => {
      console.error(error);
      console.error(error.stack);
    });
  };
};

export function _fetch_User_Plants(user){
  return dispatch => {
    $.ajax({
      method: 'POST',
      url: 'postgres/defineNewUrl',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ user: user }),
    }).then(plantFacts => {
      dispatch(setPlantFacts(plantFacts));
    });
  };
}
