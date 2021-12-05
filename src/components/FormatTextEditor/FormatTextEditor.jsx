import React, { useCallback, useEffect, useRef } from 'react';
import styles from './FormatTextEditor.module.css';
import cx from 'classnames';

export default function FormatTextEditor({label, onChange, isClear}) {
  const divRef = useRef(null);

  const keyUpHandler = useCallback((e) => {
    const {textContent, innerHTML} = e.target;
    onChange({textContent, innerHTML});
  }, [onChange]);

  useEffect(() => {
    divRef.current.innerHTML = '';
  }, [isClear])

  return (
    <>
      <div
        ref={divRef}
        role="textbox"
        contentEditable
        className={cx('form-control', styles.editor)}
        onKeyUp={keyUpHandler}
        />
      <label htmlFor="message">{label}</label>
    </>
  )
}
