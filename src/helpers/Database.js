import { getDatabase, get, ref, child, set, onValue, off, query } from 'firebase/database';

class Database {
  constructor(fireApp) {
    this._app = fireApp;
  }
  _getDb() {
    return getDatabase(this._app);
  }
  _getDbRef(path = null) {
    console.log(path);
    return ref(this._getDb(path));
  }

  async getData(path) {
    try {
      const dbRef = this._getDbRef();
      const snapshot = await get(child(dbRef, path));
      return snapshot.val()
    } catch (e) {
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

  listenData(path, callback) {
    const dbRef = query(ref(this._getDb(), path));
    onValue(dbRef, (snap) => callback(snap.val()));
    console.log(path);
    return () => off(dbRef);
  }
}

const DB = new Database();

export default DB;