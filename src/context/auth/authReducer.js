const authReducer = (state, {type, payload}) => {
  switch(type) {
    case 'auth':
      return {
        ...state,
        nickname: payload,
        authState: 1,
      };
    case 'user/set':
      return {
        ...state,
        user: payload,
        authState: 2,
      }
    case 'user/remove':
      return {
        ...state,
        user: null,
        nickname: null,
        authState: 0,
      }
    default:
      return state;
  }
}

export default authReducer;