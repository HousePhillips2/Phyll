export function setAdminData(adminData) {
  return {
    type: 'SET_ADMIN_DATA',
    adminData
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

export function toggleNewPlant() {
  return {
    type: 'TOGGLE_NEW_PLANT',
  };
}