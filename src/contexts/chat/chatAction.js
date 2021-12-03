const setMessages = (msgArr) => {
  return {
    type: 'set/messages',
    payload: msgArr,
  };
}

const setChatInfo = (companionId, createdAt) => {
  return {
    type: 'set/info',
    payload: { companionId, createdAt },
  };
}

const setCompanion = (companion) => {
  return {
    type: 'set/companion',
    payload: companion,
  };
}

const removeCompanion = () => {
  return {
    type: 'set/companion',
    payload: null,
  };
}

export { setMessages, setChatInfo, setCompanion, removeCompanion };