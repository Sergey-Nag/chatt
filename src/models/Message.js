export default class Message {
  /** @type {string} */from;
  /** @type {string} */text;
  /** @type {string} */textMarkup;
  /** @type {number} */timestamp;

  /**
   * @param {string | Message} from user nickname or Message data
   * @param {string} text 
   * @param {string} textMarkup 
   * @param {number} timestamp
  */
  constructor(from, text, textMarkup = null, timestamp = null) {
    if (typeof from === 'object') {
      from.text = from.textMarkup ? from.text.trim() : from.textMarkup = from.text.trim() ;

      this.from = from.from;
      this.text = from.text;
      this.textMarkup = from.textMarkup.trim();
      this.timestamp = from.timestamp ?? Date.now();
    } else {
      text = textMarkup ? text.trim() : textMarkup = text.trim();

      this.from = from;
      this.text = text;
      this.textMarkup = textMarkup.trim();
      this.timestamp = timestamp ?? Date.now();
    }
  }
}