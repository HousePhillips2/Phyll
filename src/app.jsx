// import React from 'react';
// import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Layout from './layout.jsx';

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
 render() {
   return (
    <Router>
      <Route path='/' component={Layout}>
        
      </Route>
    </Router>
   )
 }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));