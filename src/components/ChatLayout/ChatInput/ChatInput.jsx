import AuthContext from 'context/auth/authContext';
import DB from 'helpers/Database';
import Message from 'models/Message';
import React, { useState, useCallback, useContext } from 'react';

export default function ChatInput({chatId}) {
  const [{user}] = useContext(AuthContext);
  const [messageText, setMessageText] = useState('');
  const sendMessage = useCallback((text) => {
    if (!user || text === '') return;
    const messageData = new Message(user.nickname, text);
    console.log(messageData);
    DB.pushMessageToChat(chatId, messageData);
    // writeMessage(chatId, messageData);
  }, [chatId, user]);

  const onSendHandler = useCallback(() => {
    sendMessage(messageText);
    setMessageText('');
  }, [messageText, sendMessage]);
  
  // const onInputSendHandler = useCallback(({keyCode, ctrlKey}) => {
  //   if (ctrlKey && keyCode === 13) {
  //     onSendHandler();
  //     inputRef.current.focus();
  //   }
  // }, [onSendHandler]);

  return (
    <div className="p-3">
      <div className="form-floating">
        <textarea
          // ref={inputRef}
          className="form-control"
          placeholder="Type here"
          id="message"
          style={{height: '100px', resize: 'none'}}
          value={messageText}
          onChange={({target}) => setMessageText(target.value)}
          // onKeyUp={onInputSendHandler}
          ></textarea>
        <label htmlFor="message">Your message</label>
      </div>
      <div className="form-group">
        <div className="row pt-3">
          <div className="col-7"></div>
          <div className="col-5 d-grid">
            <button className="btn btn-primary" onClick={onSendHandler}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
