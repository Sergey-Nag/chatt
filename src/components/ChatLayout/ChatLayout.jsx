import React from 'react';
import useListenFirebaseData from 'hooks/useListenFirebaseData';
import { useParams } from 'react-router';
import ChatInput from './ChatInput/ChatInput';
import styles from './ChatLayout.module.css';
import ChatMessages from './ChatMessages/ChatMessages';

export default function ChatLayout() {
  const { chatId } = useParams();
  const [chat] = useListenFirebaseData(`chatsMessages/${chatId}`, {
    limit: 50
  });
  
  return (
    <div className={styles.wrapp}>
      <ChatMessages messages={chat} />
      <ChatInput chatId={chatId} />
    </div>
  )
}
