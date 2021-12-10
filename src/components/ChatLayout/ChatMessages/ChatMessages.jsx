import React, { useContext, useState, useEffect } from 'react';
import AuthContext from 'context/auth/authContext';
import returnArrayFromObj from 'helpers/returnArrayFromObj';
import Message from 'models/Message';
import MessageBox from './MessageBox/MessageBox';

export default function ChatMessages({messages}) {
  const [{user}] = useContext(AuthContext);
  const [messagesArr, setMessagesArr] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    if (!messages) return;
    setMessagesArr(returnArrayFromObj(messages).map((msg) => new Message(msg)));
  }, [messages]);
  
  useEffect(() => {
    lastMessage && lastMessage.scrollIntoView({behavior: 'smooth'});
  }, [lastMessage]);

  return (
    <div className="flex-grow-1 overflow-auto bg-light perfect-scroll">
      {messagesArr && messagesArr.map((/** @type {Message} */msg) => 
        <MessageBox
          key={msg.timestamp}
          markup={msg.textMarkup}
          from={msg.from}
          isUser={msg.from === user.nickname}
          time={msg.timestamp}
          setLastMsg={setLastMessage}
          />
      )}
      {/* <Message isUser/> */}
    </div>
  )
}
