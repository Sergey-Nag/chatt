import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router';
import AuthContext from '../../context/auth/authContext';

export default function ProtectedRoute() {
  const [auth] = useContext(AuthContext);
  if (auth.authState === 0) {
    return <Navigate to="/auth" />
  }
  return <Outlet />
}
