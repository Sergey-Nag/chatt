import { createContext } from "react";

const defaultAuth = {
  /** 
   * 0 - none,
   * 1 - pending,
   * 2 - authorized */
  authState: localStorage.getItem('user') ? 2 : 0,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  nickname: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).nickname : null
}

const AuthContext = createContext(defaultAuth);

export default AuthContext;
export { defaultAuth };
