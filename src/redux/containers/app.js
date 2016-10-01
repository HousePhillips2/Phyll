import { List, Map, fromJS } from 'immutable';


export const INITIAL_STATE = Map({
  loggedIn: false
});

export const setUser = (state, user) => {

  // IF user already loggedIn
  if( state.get('loggedIn', true)){
    // RETURN state
    return state;
  }
  // UPDATE state
  return state.set('loggedIn', true)
              .set('user', Map({
                firstName: user.firstName,
                lastName: user.lastName,
                facebookId: user.facebookId,
                email: user.email
              }));
};
