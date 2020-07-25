import { createSelector } from 'reselect';

const getChatState = (state) => state.chatState;

export const getChats = createSelector(getChatState, (state) => state.chatList);
export const getUser = createSelector(getChatState, (state) => state.userName);
