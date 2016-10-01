import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore   from '../../src/redux/store/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map({
      loggedIn: false
    }));
  });

  it('returns current state when passed unrecognized action', () => {
    const store = makeStore();
    store.dispatch({
      type: 'FAKE_ACTION',
    });

    expect(store.getState()).to.equal(Map({
      loggedIn: false
    }));
  });

});
