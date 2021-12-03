const initialChatState = {
  info: null,
  companion: null,
  messages: null,
}

const chatReducer = (state, { type, payload }) => {
  switch (type) {
    case 'set/info':
      return {
        ...state,
        info: {...payload},
      };
    case 'set/companion':
      return {
        ...state,
        companion: payload == null ? null : {...payload},
      };
    case 'set/messages':
      return {
        ...state,
        messages: [...payload],
      };
    default:
      throw new Error();
  }
}

export { chatReducer, initialChatState };