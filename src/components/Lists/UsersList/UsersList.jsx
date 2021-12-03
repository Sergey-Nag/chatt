import React, { useCallback, useContext } from 'react';
import useListenFirebaseData from '../../../hooks/useListenFirebaseData';
import time from '../../../helpers/time';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import styles from './UsersList.module.css';
import AuthContext from '../../../contexts/auth/authContext';

export default function UsersList({ users }) {
  const params = useParams();
  const [{ user }] = useContext(AuthContext);
  // ToDo: show chats list with links to specific chat (and/or users list with create chat link if chat doesn't exist)
  return (
    <div className="bg-white overflow-auto h-100 py-3">
      {users && users.map((u) => (
        <NavLink key={u.id} to={'/'}>
          <div className="card row">
            <div className="col-3">
              <img src="" alt="" />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
