import { useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import AuthRoute from "./routes/Auth/AuthRoute";
import ChatRoute from "./routes/Chat/ChatRoute";
import AuthContext from "./contexts/auth/authContext";
import { authReducer, initialAuthState } from "./contexts/auth/authReducer";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import ChatLayout from "./components/ChatLayout/ChatLayout";
import CreateChat from "./components/CreateChat/CreateChat";
import BlankChat from "./components/BlankChat/BlankChat";

function App() {
  const [auth, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <div className="App">
      <AuthContext.Provider value={[auth, dispatch]}>
        <Routes>
          <Route path="/" exact element={auth.user ? <Navigate to="/chat" /> : <Navigate to="/auth" /> } />
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
