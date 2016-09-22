import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../../src/redux/store/store';
import setUsers from '../../src/redux/actions/actions';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    const users = List.of( 'Casey', 'Eric', 'Phoebe', 'Sergey' );
    store.dispatch(setUsers(users));
    expect(store.getState('users')).to.equal(fromJS(
      {
        users: [ 'Casey', 'Eric', 'Phoebe', 'Sergey' ]
      }
    ));
  });

});
