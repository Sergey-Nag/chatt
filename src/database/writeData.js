import { getDatabase, ref, set, push, runTransaction } from "firebase/database";
import firebaseApp from "../firebaseApp";


export function writeUserData({uid, displayName, email, photoURL, metadata}) {
  const db = getDatabase(firebaseApp);

  set(ref(db, 'users/' + uid), {
    username: displayName,
    email: email,
    profile_picture : photoURL,
    lastLogin: metadata.lastLoginAt,
  });
}

export async function updateUserData(userId, updateObject) {
  if (typeof userId === 'object') userId = userId.uid;
  const db = getDatabase(firebaseApp);

  const postRef = ref(db, 'users/'+ userId);
  const deepUpdate = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    for (let key in obj2) {
      if (typeof obj2[key] === 'object') {
        newObj[key] = {...deepUpdate(obj1[key], obj2[key])};
      }
    }
    return newObj;
  }
  await runTransaction(postRef, (userData) => {
    if (userData) {
      userData = deepUpdate(userData, updateObject);
    }
    return userData;
  })
}

export function updateUserListData(userId, listName, newItem) {
  const db = getDatabase(firebaseApp);

  if (typeof userId === 'object') userId = userId.uid;
  
  const listRef = ref(db, 'users/' + userId + '/' + listName);
  const newListRef = push(listRef);
  set(newListRef, newItem);
}

export async function createChatRoom(userId, companionId) {
  const db = getDatabase(firebaseApp);

  const createTime = Date.now();
  const chatId = createTime.toString(36);
  
  await set(ref(db, 'chatRoom/' + chatId), {
    chatBetween: [userId, companionId],
    createdAt: createTime,
    messages: [],
  });

  await updateUserData(userId, {chats: {
    [companionId]: chatId,
  }})
  await updateUserData(companionId, {chats: {
    [userId]: chatId,
  }});

  return chatId;
}

export async function writeMessage(chatId, messageObj) {
  const db = getDatabase(firebaseApp);
  const messagesRef = ref(db, `chatRoom/${chatId}/messages`);
  const newMessagesRef = push(messagesRef);
  await set(newMessagesRef, messageObj);
}