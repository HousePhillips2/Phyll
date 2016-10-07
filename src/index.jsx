import * as Tether from 'tether';
import Bootstrap from 'bootstrap';
import React from 'react';
import d3 from 'd3';
import makeStore from './redux/store/store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {
  Router, 
  Route, 
  Redirect, 
  browserHistory, 
  IndexRoute,
} from 'react-router';

import Conservatory from './views/conservatory.jsx'
import Home from './views/home.jsx';
import App from './views/app.jsx';
import { setUser } from './redux/actions/actions';

// INSTANTIATE new Redux Store
export const store = makeStore();

require('./stylesheets/main.scss');

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path='/' component={ App }>
            <IndexRoute component={ Home }/>
            <Route path='conservatory' component={ Conservatory }/>
          </Route>
          <Redirect from="*" to="/" /> 
        </Router>
      </Provider>
    );
  }
}

render(<MyApp />, document.getElementById('app'));