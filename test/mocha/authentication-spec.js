import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore   from '../../src/redux/store/store';
import { setUser } from '../../src/redux/actions/actions';

describe('authentication', () => {

  const store = makeStore();

  it('defaults to user not logged in', () => {
    expect(store.getState()).to.equal(Map({ loggedIn: false }));
  });

  it('logs user in when none is logged in already', () => {

    // DEFINE user
    const user = {
      firstName: 'Eric',
      lastName: 'Churchill',
    };

    // DISPATCH Action to store
    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        facebookId: undefined,
        email: undefined
      })
    }));
  });

  it('forbids user login when one is already signed in', () => {

    const user = {
      firstName: 'Phoebe',
      lastName: 'Maio'
    };

    store.dispatch(setUser(user));

    expect(store.getState()).to.equal(Map({
      loggedIn: true,
      user: Map({
        firstName: 'Eric',
        lastName: 'Churchill',
        facebookId: undefined,
        email: undefined
      })
    }));
  });
});
