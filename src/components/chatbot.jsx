import { Router } from 'react-router';
import React from 'react';
import $ from 'jquery';

const socket = io();
export default class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
      lastMessage: null
    };
  }
  render() {
    console.log(this.state.messages, 'messages in render');
    if(this.props.loggedIn && this.props.user_plants.length > 0){

      this._getUserId();//send user id to chatbot in server before initial the conversation
      let messages = this.state.messages;
      let welcome = ['Hello ' + this.props.firstName + '. What a wonderful day it is.', 0, 'list-group-item list-group-item-success'];
      if(this.state.lastMessage===null){
        messages.push(welcome);
      }
      // TODO: Add login handler on "login to talk to plant" field. Might be better as "add device to..."
      // TODO: Add "you don't have any plants" prompt state after login with no plants
      // TODO: "Talk to [plant name]"

      return (

        <div className="card">
          <div className="card-header">
            Talk to your plant
          </div>
          <div className="card-block">
            <div className='container-fluid graff'>
              <div>
                <form onSubmit={this._notifyServer.bind(this)}>
                  <div className="input-group">
                    <input type="text" className="form-control" id='input' placeholder="Protip: plants aren't known for wit." ref={input => this._msg = input}/>
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="submit" >Say it</button>
                    </span>
                  </div>
                </form>
              </div>
              <div className="card" style={{ marginTop: 2 + 'rem' }}>
                <div className="card-body">
                  <div id='messages' className="list-group list-group-flush">
                    {messages.map((msg) => <a href="#" className={msg[2]} key={msg[1]}>{msg[0]}</a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    } else if (this.props.loggedIn) {

      return (

        <div className="card">
          <div className="card-header">
            Talk to a houseplant
          </div>
          <div className="card-body">
            <div id='messages' className="list-group list-group-flush">
              <span className="list-group-item list-group-item-action list-group-item-danger">Oh no! You don't have any plants yet.</span>
            </div>
          </div>
        </div>

      );

    } else {

      return (

        <div className="card">
          <div className="card-header">
            Talk to a houseplant
          </div>
          <div className="card-body">
            <div id='messages' className="list-group list-group-flush">
              <span className="list-group-item list-group-item-action list-group-item-success">Login to chat with your plant!</span>
            </div>
          </div>
        </div>

      );
    }
  }
  _getUserId(){
    socket.emit('userId', this.props.id);
  }

  _notifyServer(e){
    e.preventDefault();
    socket.emit('client', this._msg.value.toLowerCase());
    this._onUpdate(this._msg.value);
    $('#input').val('');
    socket.on('plant', (msg) => {
      if (msg[0] !== this.state.lastMessage) {
        this._onUpdate(msg);
      }
    });
  }

  _onUpdate (msg) {
    let newMessages = this.state.messages;
    let counter = this.state.counter + 1;
    newMessages.unshift([msg, counter, this.state.counter % 2 === 0 ? 'list-group-item' : 'list-group-item list-group-item-success']);
    this.setState({messages: newMessages.slice(0,7), counter: counter, lastMessage: msg[0]});
  }
}