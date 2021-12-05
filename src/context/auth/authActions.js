import DB from "../../helpers/Database";

const authUser = (userObj) => {
  
  DB.writeData(`users/${userObj.nickname}`, userObj);
  localStorage.setItem('user', JSON.stringify(userObj));

  return {
    type: 'auth',
    payload: userObj.nickname,
  }
}

const setUser = (userObj) => ({
  type: 'user/set',
  payload: userObj,
});

const logOut = () => {
  localStorage.removeItem('user');

  return {
    type: 'user/remove',
  }
}

export { authUser, setUser, logOut };