import React, { useContext } from "react";
import AuthContext from "context/auth/authContext";
import ChatCard from "./ChatCard/ChatCard";

export default function ChatsList() {
  const [{ user }] = useContext(AuthContext);
  
  return (
    <div className="bg-white h-100 py-3">
      <span className="text-muted">Chats: {user.chats?.length ?? 0}</span>
      {user.chats && user.chats.map((chatId) => (
        <ChatCard key={chatId} chatId={chatId} nickname={user.nickname} />
      ))}
    </div>
  )
}
