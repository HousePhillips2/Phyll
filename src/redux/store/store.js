import { createStore } from 'redux';
import reducer from '../reducers/reducer';

export default function makeStore() {
  return createStore(reducer);
}
