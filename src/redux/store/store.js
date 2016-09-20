import { createStore } from 'redux';
import reducer from '../reducers/reducers';

export default function makeStore() {
  return createStore(reducer);
}
