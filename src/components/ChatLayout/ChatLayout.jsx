import React from 'react';
import useListenFirebaseData from 'hooks/useListenFirebaseData';
import { useParams } from 'react-router';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';

export default function ChatLayout() {
  const { chatId } = useParams();
  const [chat] = useListenFirebaseData(`chatsMessages/${chatId}`, {
    limit: 50
  });
  
  return (
    <div className="d-flex flex-column h-100">
      <ChatMessages messages={chat} />
      <ChatInput chatId={chatId} />
    </div>
  )
}
