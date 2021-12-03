const initialAuthState = {
  user: (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) ?? null,
  credentials: (localStorage.getItem('credentials') && JSON.parse(localStorage.getItem('credentials'))) ??null,
}



const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'set/user':
      return {
        ...state,
        user: {...payload},
      };
    case 'set/credentials':
      return {
        ...state,
        credentials: {...payload},
      };
    case 'remove/user':
      return {
        ...state,
        user: null,
      };
    case 'remove/credentials':
      return {
        ...state,
        credentials: null,
      };
    case 'logout':
      return {
        user: null,
        credentials: null,
      }
    default:
      throw new Error();
  }
}

export { authReducer, initialAuthState };