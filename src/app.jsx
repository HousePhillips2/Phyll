import * as Tether from 'tether';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './views/home.jsx';


require('./stylesheets/main.scss');

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
 render() {
   return (
    <Router history ={browserHistory}>
      <Route path='/' component={ Home }/>
    </Router>
  );
 }
}

render(<MyApp />, document.getElementById('app'));
