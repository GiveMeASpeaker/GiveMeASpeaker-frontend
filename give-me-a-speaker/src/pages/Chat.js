import React from 'react';
import { getChats, getUser } from '../data/chats/selectors';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../data/chats/actions';

const Chat = () => {
  const dispatch = useDispatch();
  const chats = useSelector(getChats);
  const user = useSelector(getUser);
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    event.preventDefault();
    dispatch(
      actions.sendChat({
        name: user,
        message: message,
      })
    );
    setMessage('');
  };

  return (
    <>
      <div>
        이름:
        <br />
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <br />
        메시지:
        <br />
        <input value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
        <br />
        <button onClick={(e) => handleSendMessage()}>전송</button>
      </div>
    </>
  );
};
export default Chat;
