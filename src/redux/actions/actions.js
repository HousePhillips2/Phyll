export function setAdmin(admins) {
  return {
    type: 'SET_ADMIN',
    admins
  };
}

export function setJournals(journals) {
  return {
    type: 'SET_JOURNALS',
    journals
  };
}

export function setUserPlantData(userPlantData) {
  return {
    type: 'SET_USER_PLANT_DATA',
    userPlantData
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user
  };
}

export function setGuest(guest) {
  return {
    type: 'SET_GUEST',
    guest
  };
}

export function removeUser(){
  return {
    type:  'REMOVE_USER'
  };
}

export function addPlant(plant){
  return{
    type: 'ADD_PLANT',
    plant
  };
}

export function setPlantFacts(plantFacts) {
  return {
    type: 'FETCH_PLANT',
    plantFacts
  };
}

export function setPlants(plants) {
  return {
    type: 'SET_PLANTS',
    plants
  };
}

export function setGarden(garden) {
  return {
    type: 'SET_GARDEN',
    garden
  };
}

export function setPhylls(phylls) {
  return {
    type: 'SET_PHYLLS',
    phylls
  };
}

export function setFocus() {
  return {
    type: 'SET_FOCUS',
  };
}

export function toggleNewPlant() {
  return {
    type: 'TOGGLE_NEW_PLANT',
  };
}

export function toggleGuestView() {
  return {
    type: 'TOGGLE_GUEST_VIEW',
  };
}

export function setUserPlantGeneric(userPlantGeneric) {
  return {
    type: 'SET_USER_PLANT_GENERIC',
    userPlantGeneric
  };
}
