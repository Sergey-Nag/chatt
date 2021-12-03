export default function time(time) {
  if (typeof time === 'string') time = +time;
  const dateTime = new Date(time);
  return {
    getDifference(timeDiff) {
      const now = timeDiff ?? Date.now();
      
      return new Date(now - time);
    },
    getTime(withSeconds = false) {
      const h = dateTime.getHours().toString().length === 1 ? '0'+dateTime.getHours() : dateTime.getHours().toString();
      const m = dateTime.getMinutes().toString().length === 1 ? '0'+dateTime.getMinutes() : dateTime.getMinutes().toString();
      const s = dateTime.getSeconds().toString().length === 1 ? '0'+dateTime.getSeconds() : dateTime.getSeconds().toString();
      return `${h}:${m}${withSeconds ? ':'+s : ''}`;
    }
  }
}