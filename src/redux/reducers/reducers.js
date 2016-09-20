let immutable = require('immutable');
import { INITIAL_STATE, setUsers } from '../containers/app';

module.exports.reducer = (state = INITIAL_STATE, action) => {

  switch( action.type ){

    case 'SET_USERS':
      return setUsers(state, action.users);

    default:
      return state;
  }
};
