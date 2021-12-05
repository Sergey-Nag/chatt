import React, { useContext, useState, useEffect } from 'react';
import AuthContext from 'context/auth/authContext';
import returnArrayFromObj from 'helpers/returnArrayFromObj';
import Message from 'models/Message';
import MessageBox from './MessageBox/MessageBox';

export default function ChatMessages({messages}) {
  const [{user}] = useContext(AuthContext);
  const [messagesArr, setMessagesArr] = useState([]);
  useEffect(() => {
    if (!messages) return;
    setMessagesArr(returnArrayFromObj(messages).map((msg) => new Message(msg)));
  }, [messages]);
  console.log(messagesArr);
  return (
    <div className="flex-grow-1 overflow-auto bg-light" style={{height: '74vh'}}>
      {messagesArr && messagesArr.map((/** @type {Message} */msg) => 
        <MessageBox
          key={msg.timestamp}
          markup={msg.textMarkup}
          from={msg.from}
          isUser={msg.from === user.nickname}
          time={msg.timestamp}
          // setLastMsg={setLastMsg}
          />
      )}
      {/* <Message isUser/> */}
    </div>
  )
}
