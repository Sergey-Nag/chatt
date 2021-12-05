import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLastDateTime } from '../../../helpers/dateTime';
import styles from './ListCard.module.css';
import cx from 'classnames';

export default function ListCard({photo, text, time, link, title}) {
  const [Time] = useState(getLastDateTime(time));
  
  return (
    <NavLink to={link} className={styles.link} title={title}>
      <div className="card ms-2 pe-3 mb-2">
        <div className="row align-center flex-nowrap">
          <div className="col-3 p-0">
            <img src={photo} className="w-100 rounded-start" alt="" />
          </div>
          <div className="col d-flex justify-content-between align-self-center align-items-baseline overflow-hidden">
            <span className={cx(styles.name, 'col-9', 'text-start', title === 'system' && styles.time)}>{text}</span>
            <span className={cx(styles.time, 'col-3', 'text-end')}>{Time}</span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
