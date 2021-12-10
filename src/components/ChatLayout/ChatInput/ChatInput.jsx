import React, { useState, useCallback, useContext } from 'react';
import AuthContext from 'context/auth/authContext';
import DB from 'helpers/Database';
import Message from 'models/Message';
import FormatTextEditor from 'components/FormatTextEditor/FormatTextEditor';

export default function ChatInput({chatId}) {
  const [{user}] = useContext(AuthContext);
  const [messageText, setMessageText] = useState('');
  const [messageHtml, setMessageHtml] = useState('');
  const [clearField, setClearField] = useState(false);

  const sendMessage = useCallback(() => {
    if (!user || !messageText || !messageHtml) return;
  
    const messageData = new Message(user.nickname, messageText, messageHtml);
    DB.pushMessageToChat(chatId, messageData);
    setClearField(!clearField);
  }, [chatId, user, messageHtml, messageText, clearField]);

  const onSendHandler = useCallback(() => {
    sendMessage(messageText);
    setMessageText('');
  }, [messageText, sendMessage]);

  const onFormatTextChange = useCallback(({textContent, innerHTML}) => {
    setMessageText(textContent);
    setMessageHtml(innerHTML);
  }, []);


  return (
    <div className="p-3">
      <div className="form-floating">
        <FormatTextEditor
          label="Your message"
          onChange={onFormatTextChange}
          isClear={clearField}
          onEnterHotKey={onSendHandler}
          />
      </div>
      <div className="form-group">
        <div className="row pt-3">
          <div className="col-7 text-start">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              
            </div>
          </div>
          <div className="col-5 d-grid">
            <button className="btn btn-primary" onClick={onSendHandler}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
