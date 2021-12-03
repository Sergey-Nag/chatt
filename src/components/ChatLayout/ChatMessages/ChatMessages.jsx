import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import AuthContext from '../../../contexts/auth/authContext';
import ChatContext from '../../../contexts/chat/chatContext';
import Message from './Message/Message'

export default function ChatMessages() {
  const [{ messages }] = useContext(ChatContext);
  const [{ user }] = useContext(AuthContext);
  const [lastMsg, setLastMsg] = useState(null);

  useEffect(() => {
    lastMsg && lastMsg.scrollIntoView({behavior: 'smooth'});
  }, [lastMsg]);
  return (
    <div className="flex-grow-1 overflow-auto bg-light" style={{height: '74vh'}}>
      {messages && messages.map((msg) => msg && <Message
        key={msg.sendAt}
        data={msg}
        isUser={msg.senderId === user.uid}
        setLastMsg={setLastMsg} />
      )}
      {/* <Message isUser/> */}
    </div>
  )
}
