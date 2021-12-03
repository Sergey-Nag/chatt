import React, { useEffect, useContext, useState } from 'react'
import {Navigate, useLocation} from 'react-router';
import { createChatRoom } from '../../database/writeData'
import AuthContext from '../../contexts/auth/authContext';

export default function CreateChat() {
  const { search } = useLocation();
  const [{ user }] = useContext(AuthContext);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    const companionId = search.split('=')[1];
    if (!companionId) return; 
    
    const createChat = async () => setChatId(await createChatRoom(user.uid, companionId));
    createChat()
  }, [search, user]);

  return chatId && <Navigate to={'/chat/'+chatId} replace={true} />;
}
