import { List, Map, fromJS } from 'immutable';


export const INITIAL_STATE = Map({
  loggedIn : false,
  newPlant : false,
  guestView: false,
});

export function setUser(state, user) {
  // IF user already loggedIn
  // if( state.get('loggedIn', true)){
  //   // RETURN state
  //   return state;
  // }
  // UPDATE state
  return state.set('loggedIn', true)
              .set('user', Map({
                firstName: user.first_name,
                lastName: user.last_name,
                name: user.nickname,
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

export function setGuest(state, guest) {
  return state.set('guest', {
                firstName: guest.first_name,
                user_plants: [{
                  plant_id: guest.plant_id,
                  plant_img: guest.plant_img,
                  plant_name: guest.plant_name,
                  plant_nickname: guest.plant_nickname,
                }],
                user_id: guest.user_id,
                img: guest.img,
                health: guest.health,
                plant: Map({
                  data: undefined
                })
              });
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

export function setAdmin(state, admins) {
  return state.set('admins',
    Map({
      fetched: true,
      admins: admins
    })
  );
}

export function setJournals(state, journals) {
  return state.set('journals',
    Map({
      fetched: true,
      journals: journals
    })
  );
}

export function toggleNewPlant(state) {
  return state.set('newPlant', !state.get('newPlant'));
}

export function toggleGuestView(state) {
  return state.set('guestView', !state.get('guestView'));
}

export function setUserPlantData(state, userPlantData) {
  return state.setIn(['user', 'plant', 'data'], userPlantData);
};
