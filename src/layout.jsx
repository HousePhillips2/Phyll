import {Link} from 'react-router';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <div className='menu'>
          the routing is working!
        </div>
        {this.props.children}
      </div>
    )
  }
} 