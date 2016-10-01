import { Map, List, fromJS } from 'immutable';

export function setUser(user) {

  return {
    type: 'SET_USER',
    user
  };
}

export function addUser(user){
  return {
    type:  'ADD_USER',
    users: List(user)
  };
}

export function addPlant(plant){
  return{
    type: 'ADD_PLANT',
    plant
  };
};
