import React, {useContext, useCallback, useEffect, useState} from 'react';
import UsersList from "./UsersList/UsersList";
import ChatsList from './ChatsList/ChatsList';
import useListenFirebaseData from '../../hooks/useListenFirebaseData';
import AuthContext from '../../contexts/auth/authContext';
import { getData } from '../../database/readData';

export default function Lists() {
  const [{ user }] = useContext(AuthContext);
  const [chatsMeta, setChatsMeta] = useState([]);
  const [chatsMetaToReq, setChatsMetaToReq] = useState([]);
  const [users] = useListenFirebaseData('users', {
    filterCallback: useCallback((u) => {
      // if (u.id === user.uid) return false;
      setChatsMetaToReq((data) => [...data, u.key]);
      return true;
    }, [user])
  });

  useEffect(() => {
    if (chatsMetaToReq.length) {
      (async () => {
        Promise.all(
          chatsMetaToReq.map((key) => getData(`chatsMeta/${key}`))
        ).then((data) => {
          if (data && data.indexOf(null) === -1) {setChatsMeta(data);}
        });
      })();
    }
  }, [chatsMetaToReq]);

  return (
    <div className="py-3">
      <UsersList users={users} />
      <hr className="m-0" />
      <ChatsList chats={chatsMeta} />
    </div>
  )
}
