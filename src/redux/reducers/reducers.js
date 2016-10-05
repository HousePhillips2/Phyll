import { combineReducers } from 'redux';

import { INITIAL_STATE, setUser, setUserData, removeUser, setPlants, setAdmin, setPlantFacts } from '../containers/app';


export default function reducer(state = INITIAL_STATE, action){

  switch( action.type ){
    case 'SET_USER':
      return setUser(state, action.user);
    case 'SET_USER_DATA':
      return setUserData(state, action.userData);
    case 'REMOVE_USER':
      return removeUser(state);
    case 'SET_PLANTS':
      return setPlants(state, action.plants);
    case 'SET_ADMIN':
      return setAdmin(state, action.admin);
    case 'FETCH_PLANT':
      return setPlantFacts(state, action.plantFacts)
    default:
      return state;
  }
};
