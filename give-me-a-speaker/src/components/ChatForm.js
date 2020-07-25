import React, { Component } from 'react';
import socketio from 'socket.io-client';
const socket = socketio.connect('');

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };
  }
  nameChanged(e) {
    this.setState({ name: e.target.value });
  }
  messageChanged(e) {
    this.setState({ message: e.target.value });
  }
  send() {
    socket.emit('chat-msg', {
      name: this.state.name,
      message: this.state.message,
    });
    this.setState({ message: '' }); // 입력 양식을 비웁니다.
  }
  render() {
    return (
      <div style={styles.form}>
        이름:
        <br />
        <input value={this.state.name} onChange={(e) => this.nameChanged(e)} />
        <br />
        메시지:
        <br />
        <input value={this.state.message} onChange={(e) => this.messageChanged(e)} />
        <br />
        <button onClick={(e) => this.send()}>전송</button>
      </div>
    );
  }
}
