import React, { useCallback, useContext, useRef, useState } from 'react'
import { useParams } from 'react-router';
import AuthContext from '../../../contexts/auth/authContext';
import { writeMessage } from '../../../database/writeData';

export default function ChatInput() {
  const [messageText, setMessageText] = useState('');
  const [{ user }] = useContext(AuthContext);
  const inputRef = useRef();
  const { chatId } = useParams();

  const sendMessage = useCallback((text) => {
    if (!user || text === '') return;
    const messageData = {
      text,
      sendAt: Date.now(),
      senderName: user.displayName,
      senderId: user.uid,
    }
    writeMessage(chatId, messageData);
  }, [chatId, user]);

  const onSendHandler = useCallback(() => {
    sendMessage(messageText);
    setMessageText('');
  }, [messageText, sendMessage]);
  
  const onInputSendHandler = useCallback(({keyCode, ctrlKey}) => {
    if (ctrlKey && keyCode === 13) {
      onSendHandler();
      inputRef.current.focus();
    }
  }, [onSendHandler]);

  return (
    <div className="p-3">
      <div className="form-floating">
        <textarea
          ref={inputRef}
          className="form-control"
          placeholder="Type here"
          id="message"
          style={{height: '100px', resize: 'none'}}
          value={messageText}
          onChange={({target}) => setMessageText(target.value)}
          onKeyUp={onInputSendHandler}
          ></textarea>
        <label htmlFor="message">Message</label>
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
