import * as Tether from 'tether';
import React from 'react';
<<<<<<< 22af987bb435206c8a23eed47f0fffa097818aec
import { render } from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './views/home.jsx';
=======
import d3 from 'd3';
import makeStore from './redux/store/store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';

import Layout from './layout/layout.jsx';
import Garden from './pages/garden.jsx';
import MyDashboard from './pages/dashBoard.jsx';
import AddPlant from './pages/addPlant.jsx';
import PlantsLibrary from './pages/plantsLibrary.jsx';
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
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<MyApp />, document.getElementById('app'));
