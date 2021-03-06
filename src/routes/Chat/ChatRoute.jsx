import React, {useEffect, useState} from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Lists from '../../components/Lists/Lists';

export default function ChatRoute() {
  const [sidebarShow, setSidebarShow] = useState(true);
  useEffect(() => {
    document.title = 'Chat';
  }, []);

  return (
    <div>
      <Header isAside={sidebarShow} setAside={setSidebarShow} />
      <div className="container" style={{height: 'calc(100vh - 56px)'}}>
        <div className="row h-100">
          {sidebarShow && <div className="col-3 h-100"><Lists /></div>}
          <div className="col h-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
