export default function returnArrayFromObj(obj, withKeys) {
  return withKeys ? Object.keys(obj).map(key => ({...obj[key], key})) : Object.values(obj);
}