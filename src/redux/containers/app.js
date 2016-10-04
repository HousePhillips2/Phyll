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
                firstName: user.given_name,
                lastName: user.family_name,
                name: user.name,
                id: user.fb_id,
                email: user.email,
                image: user.picture_large,
                timezone: user.timezone
              }));
};

export function removeUser(state) {
  return state.set('loggedIn', false)
              .remove('user');
};

export function setPlants(state, plants) {
  return state.set('plants',
    Map({
      fetched: true,
      plants: List(plants)
    })
  );
}

export function setAdmin(state, admin){
  return state.set('admin',
    Map({
      fetched: true,
      admin: List(admin)
    })
  );
}
