import React, { useContext, useEffect } from 'react';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';
import { getUserById, listenData } from '../../database/readData';
import { useParams } from 'react-router';
import AuthContext from '../../contexts/auth/authContext';
import ChatContext from '../../contexts/chat/chatContext';
import { removeCompanion, setChatInfo, setCompanion, setMessages } from '../../contexts/chat/chatAction';

export default function ChatLayout() {
  const [auth] = useContext(AuthContext);
  const [chat, dispatch] = useContext(ChatContext);
  const {chatId} = useParams();

  useEffect(() => {
    const unsubscribe = listenData(`chatRoom/${chatId}`, (data) => {
      if (!data) return;

      dispatch(setMessages(data.messages ? Object.values(data.messages) : []));

      const companionId = data.chatBetween.find((id) => id !== auth.user.uid);
      dispatch(setChatInfo(companionId, data.createdAt));
    });

    return () => unsubscribe();
  }, [chatId, auth.user, dispatch]);

  useEffect(() => {
    if (chat.info && chat.info.companionId) {
      (async () => {
        const companion = await getUserById(chat.info.companionId);
        dispatch(setCompanion(companion));
      })();
    } else if (chat.info) {
      dispatch(removeCompanion());
    }
  }, [chat.info, dispatch]);
  

  return (
    <div className="d-flex flex-column h-100">
      <ChatMessages />
      <ChatInput />
    </div>
  )
}
