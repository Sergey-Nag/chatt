import React, {useEffect, useState} from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Lists from '../../components/Lists/Lists';

export default function ChatRoute() {
  // const [{user}] = useContext(AuthContext);
  const [sidebarShow, setSidebarShow] = useState(true);
  useEffect(() => {
    document.title = 'Chat';
  }, []);

  return (
    <div>
      <Header isAside={sidebarShow} setAside={setSidebarShow} />
      <div className="container" style={{height: 'calc(100vh - 56px)'}}>
        <div className="row h-100">
          {sidebarShow && <div className="col-3"><Lists /></div>}
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
