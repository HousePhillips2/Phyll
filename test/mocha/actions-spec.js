import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore   from '../../src/redux/store/store';
import { setUser, removeUser, setAdminData } from '../../src/redux/actions/actions';

describe('Action Creators', () => {

  describe('setAdminData', () => {

    it('is an action creator that sets admin data', () => {
      const store  = makeStore();
      const adminData = [
        {
          "user_name": "Phoebe Maio",
          "id": "1",
          "img": "images/dummy/p.jpeg",
          "plants": [
            {
              "img": "images/dummy/plant4.jpeg",
              "name": "Cactus",
              "Light": "Full Sun"
            }
          ]
        },
        {
          "user_name": "Casey Childers",
          "id": "4",
          "img": "images/dummy/c.jpeg",
          "plants": [
            {
              "img": "images/dummy/plant1.jpeg",
              "name": "Funeral Gift",
              "Light": "Full Sun"
            }
          ]
        },
      ];

      store.dispatch(setAdminData(adminData));

      expect(store.getState().get('admin')
                  .get('data'))
                  .to.equal(adminData);
    });
  });

});
