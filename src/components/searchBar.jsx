import Autosuggest from 'react-autosuggest';//Reference:  https://github.com/moroshko/react-autosuggest
import './theme.css';
import {records} from '../records.js';

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

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
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
    this.setState({
      suggestions: []
    });
  };
  
  onSuggestionSelected () {
    this.setState({
      value: ''
    });
  };

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
        onSuggestionSelected={this.onSuggestionSelected.bind(this)}
        inputProps={inputProps} />
    );
  }
}
