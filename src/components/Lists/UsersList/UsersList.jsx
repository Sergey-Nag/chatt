import React, { useCallback, useContext } from 'react';
import useListenFirebaseData from '../../../hooks/useListenFirebaseData';
import AuthContext from '../../../context/auth/authContext';
import ListCard from '../ListCard/ListCard';

export default function UsersList() {
  const [{user}] = useContext(AuthContext);
  const [users] = useListenFirebaseData('users', {
    filterCallback: useCallback(({uid, chats}) => {
      return (
        (uid !== user.uid && !chats ) ||
        (chats && user.chats && !chats?.some(nick => user.chats.includes(nick)))
      )
    }, [user])
  });

  return (
    <div className="bg-white py-3">
      <span className="text-muted">Users: {users?.length ?? 0}</span>
      {users && users.length > 0 && users.map(({uid, nickname, displayName, photoURL, lastLoginAt}) => (
        <ListCard 
          key={uid}
          text={displayName}
          time={+lastLoginAt}
          photo={photoURL}
          link={`new?user=${nickname}`}
          />
      ))}
    </div>
  );
}
