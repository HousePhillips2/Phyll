import $ from 'jquery'; //(cannot find jquery in node modules when compiling) npm install jquery

/*Come back: implement autosuggest bar*/
/*Come back: position the search bar in the center of the page*/

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.will);
    return (
      <div>
        <form id="searchform" onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" id="searchterm" placeholder="Add My Plant" ref={input => this._plant = input}/>
          <button style={{color:'green'}} type="submit" id="search" >Search</button>
        </form>
      </div>
    )
  }
  _handleSubmit(e){
    e.preventDefault();
    console.log(this)
    console.log(this._plant.value, "this typein in SearchBar")
    this.props.addMyPlant();
    this._plant.value = '';
  }

}