import moment from "moment";

const getLastDateTime = (timestamp) => {
  const date = moment(timestamp);
  const today = moment();

  if (today.isAfter(date, 'date')) {
    return today.to(date);
  }
  return date.format('HH:mm');
}

const getMessageTime = (timestamp) => {
  const time = moment(timestamp);
  const now = moment();

  if (time.isAfter(now, 'date')) {
    return time.format('DD.MM HH:mm');
  }
  return time.format('HH:mm');
}

const getFullMessageTime = (timestamp) => {
  return moment(timestamp).format('DD.MM.YY HH:mm');
}

export { getLastDateTime, getMessageTime, getFullMessageTime };