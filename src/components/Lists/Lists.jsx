import React from 'react';
import UsersList from "./UsersList/UsersList";
import ChatsList from './ChatsList/ChatsList';

export default function Lists() {
  
  return (
    <div className="py-3 text-start">
      <UsersList />
      <hr className="m-0" />
      <ChatsList />
    </div>
  )
}
