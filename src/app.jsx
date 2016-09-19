// import React from 'react';
// import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './layout.jsx';
import SearchBar from './searchBar.jsx';
import Garden from './garden.jsx';
import MyDashboard from './dashBoard.jsx';
import PlantFacts from './plantFacts.jsx';
import PlantForm from './plantForm.jsx';
import AddPlant from './addPlant.jsx';

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
 render() {
   return (
    <Router history={hashHistory}>
    <Redirect from='/' to='/addPlant'/>
      <Route path='/' component={Layout}>
        <Route path='addPlant' component={AddPlant} />
        <Route path='myDashboard' component={MyDashboard} />
        <Route path='garden' component={Garden} />
      </Route>
    </Router>
   )
 }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));