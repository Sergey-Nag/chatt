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

  const sendMessage = useCallback((text) => {
    if (!user || !messageText || !messageHtml) return;
    console.log(messageText, messageHtml);

    const messageData = new Message(user.nickname, messageText, messageHtml);
    DB.pushMessageToChat(chatId, messageData);
    // writeMessage(chatId, messageData);
    setClearField(!clearField);
  }, [chatId, user, messageHtml, messageText, clearField]);

  const onSendHandler = useCallback(() => {
    sendMessage(messageText);
    setMessageText('');
  }, [messageText, sendMessage]);

  const onFormatTextChange = useCallback(({textContent, innerHTML}) => {
    // console.log(innerHTML);
    setMessageText(textContent);
    setMessageHtml(innerHTML);
  }, [])
  // const onInputSendHandler = useCallback(({keyCode, ctrlKey}) => {
  //   if (ctrlKey && keyCode === 13) {
  //     onSendHandler();
  //     inputRef.current.focus();
  //   }
  // }, [onSendHandler]);
  return (
    <div className="p-3">
      <div className="form-floating">
        <FormatTextEditor
          // ref={inputRef}
          label="Your message"
          onChange={onFormatTextChange}
          isClear={clearField}
          // onKeyUp={onInputSendHandler}
          />
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
