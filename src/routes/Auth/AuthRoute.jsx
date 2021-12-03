import React, { useContext, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import AuthContext from '../../contexts/auth/authContext';
import { useNavigate } from 'react-router';
import { setCredentials, setUser } from '../../contexts/auth/authAction';
import { writeUserData } from '../../database/writeData';

export default function AuthRoute() {
  const [, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  const authorize = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const authenticateResult = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(authenticateResult);
      const user = {...authenticateResult.user, ...{nickname: authenticateResult.user.email.split('@')[0].replace(/\./g, '')}};

      dispatch(setUser(user));
      dispatch(setCredentials(credential));
      writeUserData(user);
      navigate('/chat');
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    document.title = 'Auth';
  }, []);

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
