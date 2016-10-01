import { Map, List, fromJS } from 'immutable';

export function setUser(user) {
  return {
    type: 'SET_USER',
    user
  };
}

export function removeUser(){
  return {
    type:  'REMOVE_USER'
  };
}

export function addPlant(plant){
  return{
    type: 'ADD_PLANT',
    plant
  };
};
