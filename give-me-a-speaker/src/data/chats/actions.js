import * as type from './actionTypes';

export const sendChat = () => {
  return {
    type: type.SEND_CHAT,
  };
};

export const receiveChat = (data) => {
  return {
    type: type.RECEIVE_CHAT,
    data,
  };
};

export const clearChat = () => {
  return {
    type: type.CLEAR_CHAT,
  };
};

export const setUserName = (data) => {
  return {
    type: type.setUserName,
    data,
  };
};
