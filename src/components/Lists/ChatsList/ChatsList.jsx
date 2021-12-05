import React, { useContext, useCallback } from "react";
import AuthContext from "context/auth/authContext";
import useListenFirebaseData from "hooks/useListenFirebaseData";
import ListCard from "../ListCard/ListCard";
import ChatCard from "./ChatCard/ChatCard";

export default function ChatsList() {
  // const params = useParams();
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
