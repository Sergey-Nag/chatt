/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useMemo, useState } from 'react'
import { logOut } from '../../context/auth/authActions';
import AuthContext from '../../context/auth/authContext';
// import { logOut } from '../../contexts/auth/authAction';
// import AuthContext from '../../contexts/auth/authContext';
// import ChatContext from '../../contexts/chat/chatContext';

export default function Header({isAside, setAside}) {
  const [{user}, dispatch] = useContext(AuthContext);
  // const [{ companion  }] = useContext(ChatContext);
  const [companion] = useState(false);
  const [photoURL, displayName] = useMemo(() => [user.photoURL, user.displayName], [user]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
          <div className={`col-${isAside ? 3 : 1} text-start`}>
            <button className="navbar-toggler" type="button" onClick={() => setAside(!isAside)}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`col d-flex justify-content-${companion ? 'between' : 'end'}`}>
            {companion && (
              <span className="ms-2">
                <img src={companion.profile_picture} alt="" width="30" height="30" className="d-inline-block align-text-top rounded" />
                <span className="mx-3 align-middle"><b>{companion.username}</b></span>
              </span>
            )}
            <span className="ms-5">
              <span className="mx-3 align-middle"><b>{displayName}</b></span>
              <img src={photoURL} alt="" width="30" height="30" className="d-inline-block align-text-top rounded" />
            <div className="btn-group ms-3">
              <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" id="settingsList" aria-expanded="false">
                <i className="bi bi-gear"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#" onClick={() => dispatch(logOut())}>Logout</a></li>
              </ul>
            </div>
            </span>
          </div>
      </div>
    </nav>
  )
}
