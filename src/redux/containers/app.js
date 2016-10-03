import { List, Map, fromJS } from 'immutable';


export const INITIAL_STATE = Map({
  loggedIn: false,
});

export function setUser(state, user) {

  // IF user already loggedIn
  if( state.get('loggedIn', true) ){
    // RETURN state
    return state;
  }
  // UPDATE state
  return state.set('loggedIn', true)
              .set('user', Map({
                firstName: user.given_name,
                lastName: user.family_name,
                facebookId: user.facebookId,
                email: user.email,
                image: user.picture_large
              }));
};

export function removeUser(state) {
  return state.set('loggedIn', false)
              .remove('user');
};
