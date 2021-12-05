import React, { useEffect, useState } from 'react';
import styles from './MessageBox.module.css';
import cx from 'classnames';
import { getFullMessageTime, getMessageTime } from 'helpers/dateTime';

export default function MessageBox({ markup, from, isUser, time, setLastMsg }) {
  const [Time, setTime] = useState(getFullMessageTime(time));
  useEffect(() => {
    setTime(from === 'system' ? getFullMessageTime(time) : getMessageTime(time))
  }, [from, time])
  return (
    <div className={`d-flex m-3 justify-content-${isUser ? 'end' : 'start'}`} 
    // ref={(el) => setLastMsg(el)}
    >
      {from === 'system' && (<div title={Time} className={styles.system}>{markup}</div>)}
      {from !== 'system' && (
        <div className="card px-3 p-2" style={{width: 'auto'}}>
          <div className="row">
            <div className={cx('col', (isUser ? 'text-end' : 'text-start'))}>
              <p className={styles.message} dangerouslySetInnerHTML={{__html: markup}}></p>
              <span className={cx('text-secondary', styles.time)} >{(Time)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
