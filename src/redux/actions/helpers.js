import $ from 'jquery';

import { store } from '../app.jsx';
import { setUser } from '../../src/redux/actions/actions';


export function _getUser() {
  $.ajax({
    method: 'GET',
    url: 'api/auth/loggedin',
    success: user => {
      store.dispatch(setUser(user));
    },
    error: error => {
      throw new Error(error);
    }
  });
}
