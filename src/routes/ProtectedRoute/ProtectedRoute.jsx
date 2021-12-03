import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router';
import AuthContext from '../../contexts/auth/authContext';

export default function ProtectedRoute() {
  const [auth] = useContext(AuthContext);
  if (!auth.user) {
    return <Navigate to="/auth" />
  }
  return <Outlet />
}
