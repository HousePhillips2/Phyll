import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Autosuggest from 'react-autosuggest';//Reference:  https://github.com/moroshko/react-autosuggest
import './theme.css';


function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return suggestion.plant_name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.plant_name}</span>
  );
}

let counter=0;

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      plants: this.props.plants
    };
  }

  getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp(escapedValue);
    const plants = this.props.plants;

    let filteredPlants = plants.filter(plant => regex.test(plant.plant_name.toLowerCase()));
    return filteredPlants.slice(0, 8);
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
    this.setState({
      suggestions: []
    });
  };

  storeInputReference (autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
      let selected = autosuggest.input.value;
      this.props.fetchPlant(selected);
    }
  }


  render() {
    const { value, suggestions, placeholder} = this.state;
    const inputProps = {
      placeholder,
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
}
