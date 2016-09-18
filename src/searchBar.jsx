import $ from 'jquery'; //(cannot find jquery in node modules when compiling) npm install jquery
import {Link} from 'react-router';

/*Come back: implement autosuggest bar*/
/*Come back: position the search bar in the center of the page*/

export default class SearchBar extends React.Component {

  render() {
    return (
      <form id="searchform" onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" id="searchterm" placeholder="Add My Plant" />
        <button style={{color:'green'}} type="submit" id="search" >Search</button>
      </form>
    )
  }
  _handleSubmit(e){
    e.preventDefault();

  }

}