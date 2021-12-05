import React from 'react';
import styles from './Message.module.css';
import cx from 'classnames';

export default function Message({ data, isUser, setLastMsg }) {
  return (
    <div className={`d-flex m-3 justify-content-${isUser ? 'end' : 'start'}`} ref={(el) => setLastMsg(el)}>
      <div className="card px-3 p-2" style={{width: 'auto'}}>
        <div className="row">
          <div className={cx('col text-wrap', isUser && 'd-none')}>
            <i className="bi bi-person-circle"></i>
            <br />
            <span>Some name</span>
          </div>
          <div className={cx('col', (isUser ? 'text-end' : 'text-start'))}>
            <p>{data.text}</p>
            <span className={cx('text-secondary', styles.time)} >{}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
