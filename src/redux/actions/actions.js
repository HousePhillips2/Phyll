import { Map, List, fromJS } from 'immutable';

export function setUsers(users){
  return {
    type:  'SET_USERS',
    users: users
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
