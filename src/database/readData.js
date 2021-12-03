import { getDatabase, ref, child, get, onValue, off, orderByKey, query } from "firebase/database";
import firebaseApp from "../firebaseApp";
import { getRef } from "./listMethods";

export async function getUsersList() {
  try {
    const dbRef = ref(getDatabase(firebaseApp));
    const snapshot = await get(child(dbRef, 'users'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return new Error('No data in "users" db');
    }
  } catch (e) {
    console.log(e);
  }
}

export function listenData(path, callback, order = null, orderValue = null) {
  const orderBy = order ?? orderByKey;
  const db = getDatabase(firebaseApp);
  const topDataRef = query(ref(db, path), orderValue ? orderBy(orderValue) : orderByKey());

  onValue(topDataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
  return () => {off(topDataRef)}
}

export async function getData(path, meta) {
  try {
    const dbRef = ref(getDatabase(firebaseApp));
    const snapshot = await get(child(dbRef, path), ...getRef(meta));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }catch (e) {
    console.log(e);
  }
}

export async function getUserById(id) {
  try {
    const dbRef = ref(getDatabase(firebaseApp));
    const snapshot = await get(child(dbRef, 'users/'+id));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return new Error('No data in "users" db');
    }
  } catch (e) {
    console.log(e);
  }
}