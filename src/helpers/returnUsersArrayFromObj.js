export default function returnUsersArrayFromObj(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    obj[key].id = key;
    acc.push(obj[key]);
    return acc;
  }, []).sort((a, b) => {
    const aLastLogin = +a.lastLogin;
    const bLastLogin = +b.lastLogin;

    return bLastLogin - aLastLogin;
  });
}
