const getUserObject = ({providerData, email}) => ({
  ...providerData[0],
  nickname: email.split('@')[0].replace(/\./g, '')
});

export { getUserObject };
