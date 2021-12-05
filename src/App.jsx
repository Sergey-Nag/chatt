import React, { useCallback, useEffect, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { setUser } from "context/auth/authActions";
import AuthContext, { defaultAuth } from "context/auth/authContext";
import authReducer from "context/auth/authReducer";
import useListenFirebaseData from "hooks/useListenFirebaseData";
import AuthRoute from "routes/Auth/AuthRoute";
import ChatRoute from "routes/Chat/ChatRoute";
import ProtectedRoute from "routes/ProtectedRoute/ProtectedRoute";
import CreateChat from "components/CreateChat/CreateChat";
import ChatLayout from "components/ChatLayout/ChatLayout";
import BlankChat from "components/BlankChat/BlankChat";

function App() {
  const [auth, dispatch] = useReducer(authReducer, defaultAuth);

  const [user] = useListenFirebaseData(`/users/${auth.nickname}`, {startListen: auth.authState !== 0});
  const asyncDispatch = useCallback(async (action) => {
    const data = await action;
    dispatch(data);
  }, []);

  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user]);

  return (
    <div className="App">
      <AuthContext.Provider value={[auth, dispatch, asyncDispatch]}>
        <Routes>
          <Route index element={user ? <Navigate to="chat" /> : <Navigate to="auth" />} />
          <Route path="auth" element={<AuthRoute/>} />
          <Route element={<ProtectedRoute />}> 
            <Route path="chat" element={<ChatRoute />}>
              <Route index element={<BlankChat />}></Route>
              <Route path="new" element={<CreateChat />}/>
              <Route path=":chatId" element={<ChatLayout />}/>
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
