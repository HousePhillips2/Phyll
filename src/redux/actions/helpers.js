import $ from 'jquery';

import { store } from '../app.jsx';
import { setUser } from '../../src/redux/actions/actions';


export function _getUser() {
  return (store) => {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin',
    }).then(({user}) => {
      store.dispatch(setUser(user));
    });
  };
}
