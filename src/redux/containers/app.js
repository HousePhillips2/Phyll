import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export const setUsers = (state = INITIAL_STATE, users) => {
  return state.set('users', List(users));
};
