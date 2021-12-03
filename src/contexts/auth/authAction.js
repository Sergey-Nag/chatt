const setUser = (user) => {

  localStorage.setItem('user', JSON.stringify(user));

  return {
    type: 'set/user',
    payload: user,
  }
};

const setCredentials = (credentials) => {
  
  localStorage.setItem('credentials', JSON.stringify(credentials));

  return {
    type: 'set/credentials',
    payload: credentials,
  }
};
const removeUser = () => {

  localStorage.removeItem('user');

  return {
    type: 'remove/user',
  }
};

const removeCredentials = () => {
  
  localStorage.removeItem('credentials');

  return {
    type: 'remove/credentials',
  }
};

const logOut = () => {
  removeUser();
  removeCredentials();

  return {
    type: 'logout',
  }
}

export { setUser, setCredentials, removeUser, removeCredentials, logOut };