import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../../src/redux/store/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type:  'SET_USERS',
      users: [ 'Casey', 'Eric', 'Phoebe', 'Sergey' ]
    });

    expect(store.getState('users')).to.equal(fromJS(
      {
        users: [ 'Casey', 'Eric', 'Phoebe', 'Sergey' ]
      }
    ));
  });

});
