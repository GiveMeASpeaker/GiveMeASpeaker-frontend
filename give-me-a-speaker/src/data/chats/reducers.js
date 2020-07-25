import * as type from './actionTypes';
import socketio from 'socket.io-client';
const socket = socketio.connect('');

const chatStates = {
  chatList: [
    {
      name: 'kangho',
      message: '테스트임당',
    },
    {
      name: 'taejung',
      message: 'good',
    },
  ],
  userName: '',
  socketId: null,
};

const chatReducer = (state = chatStates, action) => {
  switch (action.type) {
    case type.SEND_CHAT: {
      socket.emit('chat-msg', {
        name: action.name,
        message: action.message,
      });
      let chatList = state.chatList.slice();
      chatList.push(action);
      return { ...state, chatList: chatList };
    }
    case type.RECEIVE_CHAT:
      let newChatList = state.chatList.slice();
      newChatList.push(action);
      return { ...state, chatList: newChatList };
    case type.CLEAR_CHAT:
      return { ...state, chatList: [] };
    case type.SET_USER_NAME:
      return { ...state, userName: action };
    default:
      return state;
  }
};

export default chatReducer;
