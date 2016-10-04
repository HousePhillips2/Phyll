import { List, Map, fromJS } from 'immutable';


export const INITIAL_STATE = Map({
  loggedIn: false,
  newPlant: false
});

export function setUser(state, user) {

  // IF user already loggedIn
  if( state.get('loggedIn', true)){
    // RETURN state
    return state;
  }
  // UPDATE state
  return state.set('loggedIn', true)
              .set('user', Map({
                firstName: user.first_name,
                lastName: user.last_name,
                name: user.nickname,
                id: user.id,
                fb_id: user.fb_id,
                email: user.email,
                image: user.img,
                timezone: user.timezone,
                plant: user.plant
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

export function setAdmin(state, admin) {
  return state.set('admin',
    Map({
      fetched: true,
      admin: List(admin)
    })
  );
}

export function setPlantFacts(state, plantFacts) {
  return state.set('plantFacts',
    Map({
      fetched: true,
      plantFacts: plantFacts
    })
  );
}

export function toggleNewPlant(state) {
  return state.set('newPlant', !state.get('newPlant'));
}

export function setAdminData(state, adminData) {
  return state.setIn(['admin', 'data'], adminData);
};
