import { getDatabase, get, ref, child, set, onValue, off, query, runTransaction, push, limitToLast, orderByKey } from 'firebase/database';
import Message from 'models/Message';

class Database {
  constructor(fireApp) {
    this._app = fireApp;
  }
  _getDb() {
    return getDatabase(this._app);
  }
  _getDbRef(...path) {
    return ref(this._getDb(), ...path);
  }

  async getData(path) {
    try {
      const dbRef = this._getDbRef();
      const snapshot = await get(child(dbRef, path));
      return snapshot.val();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  writeData(path, data) {
    try {
      const db = this._getDb();
      set(ref(db, path), data);
    } catch (e) {
      return null;
    }
  }

  listenData(path, callback, {limit = null} = {}) {
    const dbRef = this._getDbRef(path);
    const dbQuery = limit ? query(dbRef, orderByKey(), limitToLast(limit)) : query(dbRef); 
    onValue(dbQuery, (snap) => callback(snap.val()));
    return () => off(dbRef);
  }

  async updateData(path, callback) {
    const dbRef = this._getDbRef(path);

    await runTransaction(dbRef, callback);
  }

  /**
   * @param {string} userNickname 
   * @param {string} companioNickname 
   */
  createChatBetween(userNickname, companioNickname) {
    const timestamp = Date.now();
    const chatId = timestamp.toString(36);
    const newMessage = new Message('system', 'chat created') ;
    this.writeData(`chatsMeta/${chatId}`, {
      chatBetween: [userNickname, companioNickname],
      createdAt: timestamp,
      lastMessage: newMessage
    });
    this.pushMessageToChat(chatId, newMessage);
    
    this.updateData(`users/${userNickname}/chats`, this._addFieldToArr(chatId));
    this.updateData(`users/${companioNickname}/chats`, this._addFieldToArr(chatId));

    return chatId;
  }

  pushMessageToChat(chatId, newMessageData) {
    try {
      const chatRef = this._getDbRef(`chatsMessages/${chatId}`);
      const newMsgRef = push(chatRef);
      set(newMsgRef, newMessageData)
        .then(() => {
          this.writeData(`chatsMeta/${chatId}/lastMessage`, newMessageData);
        });
      
    } catch (e) {
      console.log(e);
    }
  }

  _addFieldToArr(field) {
    return (data) => {
      if (Array.isArray(data) && !data.includes(field)) {
        return [...data, field];
      } else if (!Array.isArray(data)) {
        return [field];
      }
    };
  }
}

const DB = new Database();

export default DB;