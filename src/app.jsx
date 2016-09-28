import * as Tether from 'tether';
import React from 'react';
import d3 from 'd3';

import { render } from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Layout from './layout/layout.jsx';
import Garden from './pages/garden.jsx';
import MyDashboard from './pages/dashBoard.jsx';
import AddPlant from './pages/addPlant.jsx';
import PlantsLibrary from './pages/plantsLibrary.jsx';
import Home from './views/home.jsx';
import Charts from './components/charts.jsx';


require('./stylesheets/main.scss');

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
 render() {
   return (
    <Router history ={browserHistory}>
      <Route path='/' component={ Home }/>
      {<Route path='/' component={Layout}>
        <Route path='addPlant' component={AddPlant} />
        <Route path='myDashboard' component={MyDashboard} />
        <Route path='plantsLibrary' component={PlantsLibrary} plantStyle = {{transform:'scale(.5)', margin:'-2em'}}/>
        <Route path='garden' component={Garden} />
      </Route>}
    </Router>
  );
 }
}

render(<MyApp />, document.getElementById('app'));
