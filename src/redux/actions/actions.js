export function fetchUser() {

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

export function fetchPlants() {

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
