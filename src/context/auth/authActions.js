import DB from "../../helpers/Database";

const authUser = (userObj) => {
  
  DB.updateData(`users/${userObj.nickname}`, (dataObj) => ({...dataObj, ...userObj}));
  localStorage.setItem('user', JSON.stringify(userObj));

  return {
    type: 'auth',
    payload: userObj.nickname,
  }
}

const setUser = (/** @type {any} */ userObj) => ({
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