// EXTERNALS
import Bootstrap from 'bootstrap';
import Tether from 'tether';
import { button } from 'react-bootstrap';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Redirect, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import jQuery from 'jquery';
import Ajax from 'jquery';
import Autosuggest from 'react-autosuggest';
// INTERNALS
import Layout from './layout/layout.jsx';
import Garden from './pages/garden.jsx';
import MyDashboard from './pages/dashBoard.jsx';
import AddPlant from './pages/addPlant.jsx';
import plantsLibrary from './components/plantsLibrary.jsx';
import SearchBar from './components/searchBar.jsx';
import PlantFacts from './components/plantFacts.jsx';
import PlantForm from './components/plantForm.jsx'