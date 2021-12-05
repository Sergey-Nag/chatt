import AuthContext from 'context/auth/authContext';
import DB from 'helpers/Database';
import React, { useEffect, useMemo, useState } from 'react'
import {Navigate, useLocation} from 'react-router';
import { useContext } from 'react/cjs/react.development';

export default function CreateChat() {
  const { search } = useLocation();
  const [chatId, setChatId] = useState(null);
  const companionNickname = useMemo(() => new URLSearchParams(search).get('user'), [search]);
  const [{user}] = useContext(AuthContext);
  useEffect(() => {
    if (!companionNickname) return;
    setChatId(
      DB.createChatBetween(user.nickname, companionNickname)
    );
  }, [user, companionNickname]);

  return chatId && <Navigate to={'/chat/'+chatId} replace={true} />;
}
