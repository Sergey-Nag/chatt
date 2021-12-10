import React, { useCallback, useEffect, useRef } from 'react';
import styles from './FormatTextEditor.module.css';
import cx from 'classnames';

export default function FormatTextEditor({label, onChange, isClear, onEnterHotKey}) {
  const divRef = useRef(null);
  const keyUpHandler = useCallback(({target, shiftKey, keyCode}) => {
    const {textContent, innerHTML} = target;
    onChange({textContent, innerHTML});
    if (!shiftKey && keyCode === 13) onEnterHotKey();
  }, [onChange, onEnterHotKey]);

  useEffect(() => {
    divRef.current.innerHTML = '';
  }, [isClear]);

  return (
    <>
      <div
        ref={divRef}
        role="textbox"
        contentEditable
        className={cx('form-control perfect-scroll', styles.editor)}
        onKeyUp={keyUpHandler}
        />
      <label>{label}</label>
    </>
  )
}
