import $ from 'jquery';

import { setUser } from './actions';


export function _getUser() {
  return dispatch => {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin'
    }).then(user => {
      if( user ){
        dispatch(setUser(user));
      }
    });
  };
}
