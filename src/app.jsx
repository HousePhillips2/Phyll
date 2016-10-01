import * as Tether from 'tether';
import React from 'react';
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

store.dispatch(setUser({
  firstName: 'Eric',
  lastName: 'Churchill',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13935040_10155130272904676_339285263140732657_n.jpg?oh=6e6e05729e1b01c4172dfb8d3a42744e&oe=5865DC0E'
}));

require('./stylesheets/main.scss');

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path='/' component={ App }>
            <IndexRoute component={ Home }/>
            {/* <Route path='addPlant' component={AddPlant} />
            <Route path='myDashboard' component={MyDashboard} />
            <Route path='plantsLibrary' component={PlantsLibrary} plantStyle = {{transform:'scale(.5)', margin:'-2em'}}/>
            <Route path='garden' component={Garden}/> */}
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<MyApp />, document.getElementById('app'));
