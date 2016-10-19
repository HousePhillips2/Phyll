import { List, Map, fromJS } from 'immutable';


export const INITIAL_STATE = Map({
  loggedIn : false,
  newPlant : false,
  guestView: false,
  mapFocus : [37.7874963, -122.4020974],
});

export function setUser(state, user) {
  return state.set('loggedIn', true)
              .set('user', Map({
                firstName   : user.first_name,
                lastName    : user.last_name,
                name        : user.nickname,
                user_plants : user.plant,
                id          : user.id,
                generic     : user.generic,
                fb_id       : user.fb_id,
                email       : user.email,
                image       : user.img,
                timezone    : user.timezone,
                plant       : Map({
                  data        : undefined
                })
              }));
};

export function setGuest(state, guest) {
  return state.set('guest', {
    firstName       : guest.first_name,
    name            : guest.nickname,
    user_plants     : [{
        plant_id      : guest.plant_id,
        plant_img     : guest.plant_img,
        plant_name    : guest.plant_name,
        plant_nickname: guest.plant_nickname,
        device_id     : guest.device_id,
        health        : guest.health,
    }],
    user_id         : guest.user_id,
    image           : guest.img,
    plant           : Map({
      data          : undefined
    })
  });
};

export function setPhylls(state, phylls) {
  return state.set('phylls', phylls);
}

export function setFocus(state) {
  if (state.get('guestView') && state.get('guest').user_plants) {
    return state.set('mapFocus', state.get('phylls')[state.get('guest').user_plants[0].device_id] || [37.7874963, -122.4020974]);
  } else if (state.get('user').user_plants) {
    return state.set('mapFocus', state.get('phylls')[state.get('user').user_plants[0].device_id] || [37.7874963, -122.4020974]);
  } else {
    return state.set('mapFocus', [37.7874963, -122.4020974]);
  }
}

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
