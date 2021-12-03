import { 
  orderByChild, orderByKey, orderByPriority, orderByValue, 
  limitToFirst, limitToLast, startAt, startAfter, endAt, endBefore, equalTo,
} from "@firebase/database";

const methods = {
  orderByChild,
  orderByKey,
  orderByPriority,
  orderByValue,
  limitToFirst,
  limitToLast,
  startAt,
  startAfter,
  endAt,
  endBefore,
  equalTo,
}

const getRef = (meta) => {
  const refData = [];
  for (let key in meta) methods[key] && refData.push(methods[key].bind(null, meta[key]));
  return refData;
}

export { methods, getRef };
