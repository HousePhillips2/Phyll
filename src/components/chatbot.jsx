import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';

const socket = io();
export default class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }
  render() {
    if(this.props.userName!==''){
      let messages = this.state.value;
      //console.log(messages,'update this.state.');
      return (
        <div className='chatContainer' style={{border:'1px solid green'}}>
          <ul id='messages'>
            <li style={{listStyleType: 'none'}}> { 'Hello ' + this.props.userName + ', What a wonderful day, is it?'} </li>
            {messages.map((msg,index) => <li style={{listStyleType: 'none'}} key={index}>{msg}</li>)}
            {/*<div>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>*/}
          </ul>
          <div className="update">
            <form onSubmit={this._notifyServer.bind(this)}>
              <input style={{width: '450px'}} id='input' type="text" placeholder="Talk to your plant ..." ref={input => this._msg = input}/>
              <button>Send</button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div >Login to chat with your plant!</div>;
    }
  }
  _notifyServer(e){
    e.preventDefault();
    //console.log(this._msg.value,'type in value');
    socket.emit('client', this._msg.value.toLowerCase());
    this._onUpdate(this._msg.value);
    $('#input').val('');
    socket.on('plant', (msg) => {
      if(msg!== this.state.value[this.state.value.length-1]){
        this._onUpdate(msg);
      }
    });
  }
  _onUpdate (msg) {
    let newMessages = this.state.value.concat(msg);
    this.setState({value: newMessages });
  }
}

