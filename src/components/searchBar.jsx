import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Autosuggest from 'react-autosuggest';//Reference:  https://github.com/moroshko/react-autosuggest
import './theme.css';

// Revisit to improve search performance and implement fetch plant data function for plantFacts component use
const plantsName = records.map((plant) => {
    return {name: plant.name};
});

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());


  if (escapedValue === '') {
    return [];
  }

  //const regex = new RegExp('^' + escapedValue, 'i');
  const regex = new RegExp(escapedValue);

  return plantsName.filter(plant => regex.test(plant.name.toLowerCase()));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

let counter=0;

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      plantsName:[],
      placeholder:''
    };
  }

  componentWillMount() {
    this._getPlantsName();
  }

  componentDidMount() {
    this._timer = setInterval(() => this.counter(), 800);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  counter() {
    counter = counter>100? 0: counter+1;
    let name = this.state.plantsName[counter].plant_name
    this.setState({placeholder:`Find out your plant: ${name}`});
  }

  getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());
  if (escapedValue === '') {
    return [];
  }

  onChange (event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested () {
    console.log(this.state.suggestions,"before clear");
    this.setState({
      suggestions: []
    });
  };

  storeInputReference (autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
      let selected = autosuggest.input.value;
      //console.log(autosuggest.input.value,"input value");
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
