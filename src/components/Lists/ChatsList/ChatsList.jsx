import React, {useContext } from 'react';
import AuthContext from '../../../contexts/auth/authContext';
import { useParams } from 'react-router';

export default function ChatsList({chats}) {
  // const params = useParams();
  // const [{ user }] = useContext(AuthContext);
  // const [lastMessage, setLastMessage] = useState('');
  console.log(chats);
  return (
    <div className="bg-white overflow-auto h-100 py-3">
     
    </div>
  )
}
