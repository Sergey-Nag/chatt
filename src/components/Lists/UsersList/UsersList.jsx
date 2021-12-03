import React, { useCallback, useContext } from 'react';
import useListenFirebaseData from '../../../hooks/useListenFirebaseData';
import time from '../../../helpers/time';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import styles from './UsersList.module.css';
import AuthContext from '../../../contexts/auth/authContext';

export default function UsersList() {
  const params = useParams();
  const [{ user }] = useContext(AuthContext);
  const {data: usersList} = useListenFirebaseData('users', {
    filterCallback: useCallback(({id}) => id !== user.uid, [user])
  });
  const getChatId = useCallback(({ id, chats = {} }) => {
    return chats[user.uid] ?? 'new?uId=' + id;
  }, [user]);
  // ToDo: show chats list with links to specific chat (and/or users list with create chat link if chat doesn't exist)
  return (
    <div className="bg-white overflow-auto h-100 py-3">
      {usersList && usersList.map((user) => user && (
        <NavLink key={user.id} to={'/chat/' + getChatId(user)} className={styles.link}>
          <div className={`card p-3 d-flex flex-row justify-content-start mb-3 ${params?.chatId === getChatId(user) ? 'bg-info bg-gradient' : ''}`}>
            <div>
              <img src={user.profile_picture} alt="avatar" width="50" className="rounded" />
            </div>
            <div className="ps-3 d-flex justify-content-between flex-grow-1 align-items-center">
              <span className="text-start">{user.username}</span>
              <span className="text-muted text-end">{time(user.lastLogin).getTime()}</span>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
