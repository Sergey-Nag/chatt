import React, { useCallback, useContext, useEffect } from 'react'
import { Navigate } from 'react-router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import AuthContext from '../../context/auth/authContext';
import { authUser } from '../../context/auth/authActions';
import { getUserObject } from '../../helpers/authData';

export default function AuthRoute() {
  const [auth, dispatch] = useContext(AuthContext);

  const authorize = useCallback(async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const authResult = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(authenticateResult);
      dispatch(authUser(getUserObject(authResult.user)))
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Auth';
  }, []);

  if (auth.authState === 2) return <Navigate to={'/chat'} />

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{height: '100vh'}}>
      <button
        onClick={authorize}
        className="btn btn-primary btn-lg">
        <i className="bi bi-google"></i>{' '}
        Sign In
        </button>
    </div>
  )
}
