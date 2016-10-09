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
  return state.set('loggedIn', true) // Can we move this device data into the actual plant array, plant by plant, and not call it plant?
              .set('user', Map({
                firstName: user.first_name,
                lastName: user.last_name,
                name: user.nickname,
                // user_plants_info: user.plants
                user_plants: user.plant,
                id: user.id,
                generic: user.generic,
                fb_id: user.fb_id,
                email: user.email,
                image: user.img,
                timezone: user.timezone,
                plant: Map({
                  data: undefined
                })
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

export function setGarden(state, garden) {
  return state.set('garden',
    Map({
      fetched: true,
      garden: List(garden)
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

export function setUserPlantData(state, userPlantData) {
  return state.setIn(['user', 'plant', 'data'], userPlantData);
};
