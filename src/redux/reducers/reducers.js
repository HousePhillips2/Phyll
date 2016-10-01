import { INITIAL_STATE, setUser, setUserData } from '../containers/app';

export default function reducer(state = INITIAL_STATE, action){

  switch( action.type ){
    case 'SET_USER':
      return setUser(state, action.user);
    case 'SET_USER_DATA':
      return setUserData(state, action.userData);

    default:
      return state;
  }
};
