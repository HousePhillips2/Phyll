import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Autosuggest from 'react-autosuggest';//Reference:  https://github.com/moroshko/react-autosuggest
import './theme.css';

// const plantsName = records.map((plant) => {
//     return {name: plant.name};
// });

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// function getSuggestions(value) {
//   const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());
//   if (escapedValue === '') {
//     return [];
//   }
//   //const regex = new RegExp('^' + escapedValue, 'i');
//   const regex = new RegExp(escapedValue);
//   return plantsName.filter(plant => regex.test(plant.plant_name.toLowerCase()));
// }

function getSuggestionValue(suggestion) {
  return suggestion.plant_name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.plant_name}</span>
  );
}

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      plantsName:[]
    };    
  }

  componentWillMount() {
    this._getPlantsName();
  }
  
  getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim().toLowerCase()); 
  if (escapedValue === '') {
    return [];
  }
  //const regex = new RegExp('^' + escapedValue, 'i');
  const regex = new RegExp(escapedValue);
  const plantsName = this.state.plantsName;
  return plantsName.filter(plant => regex.test(plant.plant_name.toLowerCase()));
  } 

  onChange (event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested ({value}) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested () {
    //console.log(this.state.suggestions,"before clear");
    this.setState({
      suggestions: []
    });
  };
  
  // onSuggestionSelected () {
  //   console.log(this.state,"selected value");
  //   //this.props.fetchPlant(this.state.value);
  //   this.setState({
  //     value: ''
  //   });
  // };

  storeInputReference (autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
      let selected = autosuggest.input.value;
      //console.log(autosuggest.input.value,"input value");
      this.props.fetchPlant(selected);
    }
  }
  

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Find about your plants: ",
      value,
      onChange: this.onChange.bind(this)
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        ref={this.storeInputReference.bind(this)} />
    );
  }
    _getPlantsName() {
    $.ajax({
      method: 'GET',
      url: '/api/plantFacts',
      success: (plantsName) => {
        this.setState({plantsName});
      }
    });
  }
}
