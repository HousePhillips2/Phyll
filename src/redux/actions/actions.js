export function setAdminData(adminData) {
  return {
    type: 'SET_ADMIN_DATA',
    adminData
  };
}

export function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    userData
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

export function setAdmin(admin) {
  return {
    type: 'SET_ADMIN',
    admin
  };
}

export function toggleNewPlant() {
  return {
    type: 'TOGGLE_NEW_PLANT',
  };
}