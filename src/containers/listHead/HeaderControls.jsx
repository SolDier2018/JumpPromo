import React from 'react';

import style from './listHead.module.css';

export default function({label, button, openMenu}) {
    return (
        <div className={style.listHead}>

            <p>{label}</p>

            <div className={style.wrapButton}>

                {button.button}

                <button type="button" className={style.burgerMenu} onClick={openMenu}>
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V2H16V0ZM16 6H0V8H16V6Z"
                              fill="#333333"/>
                    </svg>
                </button>
            </div>
        </div>
    );

};