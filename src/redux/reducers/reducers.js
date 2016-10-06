import { combineReducers } from 'redux';
import {
  INITIAL_STATE,
  setUser,
  setUserData,
  removeUser,
  setPlants,
  setAdmin,
  setAdminData,
  setPlantFacts,
  toggleNewPlant,
  setUserPlantData
} from '../containers/app';


export default function reducer(state = INITIAL_STATE, action){

  switch( action.type ){
    case 'SET_USER':
      return setUser(state, action.user);
    case 'SET_USER_PLANT_DATA':
      return setUserPlantData(state, action.userPlantData);
    case 'REMOVE_USER':
      return removeUser(state);
    case 'SET_PLANTS':
      return setPlants(state, action.plants);
    case 'SET_ADMIN':
      return setAdmin(state, action.admin);
    case 'FETCH_PLANT':
      return setPlantFacts(state, action.plantFacts);
    case 'TOGGLE_NEW_PLANT':
      return toggleNewPlant(state);
    case 'SET_ADMIN_DATA':
      return setAdminData(state, action.adminData);
    default:
      return state;
  }
};
