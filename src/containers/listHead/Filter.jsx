import React from 'react';
import style from './listHead.module.css';

export default function({...attrs}) {
  return(
      <div className={style.contentMenuFilter}>
          <button type={'button'} {...attrs}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333"
                   xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M2 4.99999H14V5.99999H2V4.99999ZM4 7.99999H12V8.99999H4V7.99999ZM10 11H6V12H10V11Z"
                        fill=""/>
              </svg>
              <p>Не обработанные</p>
          </button>
      </div>
  )
};