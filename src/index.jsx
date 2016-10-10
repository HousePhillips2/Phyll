import * as Tether from 'tether';
import Bootstrap from 'bootstrap';
import React from 'react';
import d3 from 'd3';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {
  Router, 
  Route, 
  Redirect, 
  browserHistory, 
  IndexRoute,
  useRouterHistory,
} from 'react-router';
import { createHistory } from 'history'

import makeStore from './redux/store/store';
import About from './views/about.jsx'
import Conservatory from './views/conservatory.jsx'
import Home from './views/home.jsx';
import App from './views/app.jsx';
import { setUser } from './redux/actions/actions';

const history = useRouterHistory(createHistory)({
  basename: '/base-path'
})

// Import stylesheets
require('./stylesheets/main.scss');

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
            <Route path='about' component={ About }/>
          </Route>
          <Redirect from="*" to="/" /> 
        </Router>
      </Provider>

    );
  }
}

render(<MyApp />, document.getElementById('app'));