import React, {useContext, useCallback } from 'react';
import useListenFirebaseData from '../../../hooks/useListenFirebaseData';
import AuthContext from '../../../contexts/auth/authContext';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { getData } from '../../../database/readData';

export default function ChatsList() {
  const params = useParams();
  const [{ user }] = useContext(AuthContext);
  // const [lastMessage, setLastMessage] = useState('');
  const {data: chatsList} = useListenFirebaseData('chatRoom', {
    filterCallback: useCallback(({chatBetween}) => chatBetween.includes(user.uid), [user]),
    // order: limitToLast,
    // orderValue: 10,
  });
  // const {data: lastMessage} = useListenFirebaseData('chatRoom', {
  //   filterCallback: useCallback(({chatBetween, id}) => chatBetween.includes(user.uid), [user]),
  // });
  const getLastMessageFromChat = useCallback(async (chatID) => {
    const data = await getData(`chatRoom/${chatID}/messages`, {limitToLast: 1});
    console.log(data);
    return '123';
  }, []);
  // useEffect(() => {
  //   if (!chatsList) return;
  //   // setLastMessage(chatsList.messages[chatsList.messages.length - 1].text)
  // }, [chatsList]);

  return (
    <div className="bg-white overflow-auto h-100 py-3">
      {chatsList && chatsList.map((chat) => {
        // const lastMsg = await getLastMessageFromChat(chat.id);
        return (
        <NavLink key={chat.id} to={'/chat/' + chat.id}>
          <div className={`card p-3 d-flex flex-row justify-content-start mb-3 ${params?.chatId === chat.id ? 'bg-info bg-gradient' : ''}`}>
            <div>
              {/* <img src={user.profile_picture} alt="avatar" width="50" className="rounded" /> */}
            </div>
            <div className="ps-3 d-flex justify-content-between flex-grow-1 align-items-center">
              <span className="text-start">{''}</span>
              <span className="text-muted text-end">{}</span>
            </div>
          </div>
        </NavLink>
      )})}
    </div>
  )
}
