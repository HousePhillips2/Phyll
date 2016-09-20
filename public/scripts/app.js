var App = React.createClass({
  render:function(){
    return (
      <div>
        <h1>Phyll</h1>
        <Controls soundCloudKey={'605555130a91e2f4502907cca2a927fd'}/>
      </div>);
  }
});

React.render(<MyApp />, document.getElementById('main'));

