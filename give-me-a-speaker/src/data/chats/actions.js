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
