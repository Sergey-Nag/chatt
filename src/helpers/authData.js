const getUserObject = ({providerData, metadata, email}) => ({
  ...providerData[0],
  nickname: email.split('@')[0].replace(/\./g, ''),
  lastLoginAt: metadata.lastLoginAt,
});

export { getUserObject };
