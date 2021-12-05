import React, { useCallback, useContext } from 'react';
import useListenFirebaseData from '../../../hooks/useListenFirebaseData';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import styles from './UsersList.module.css';

export default function UsersList() {
  const params = useParams();
  
  // const [users] = useListenFirebaseData('users', {
  //   filterCallback: useCallback((u) => u.id !== user.uid, [user])
  // });
  // ToDo: show chats list with links to specific chat (and/or users list with create chat link if chat doesn't exist)
  return (
    <div className="bg-white h-100 py-3">
      {/* {users && users.map((u) => (
        <NavLink key={u.id} to={'/chat/new?id='+u.id} className={styles.link}>
          <div className="card">
            <div className="row">
              <div className="col-3">
                <img src={u.profile_picture} className="w-100" alt="" />
              </div>
              <div className="col">
                <span>{u.username}</span>
              </div>
            </div>
          </div>
        </NavLink>
      ))} */}
    </div>
  );
}
