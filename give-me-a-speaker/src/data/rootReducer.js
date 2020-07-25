import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import chatReducer from './chats/reducers';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    chatState: chatReducer,
  });

export { createRootReducer };
