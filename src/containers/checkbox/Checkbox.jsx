import React, {Fragment} from 'react';

import style from './checkbox.module.css';

function Checkbox(props) {
    const {id, label, checked, onChange} = props;

    return (
        <div>
            <input type="checkbox"
                   id={id}
                   className={style.inputCheckbox}
                   defaultChecked={checked}
                   onChange={() => onChange(!checked)}/>

            <label htmlFor={id} className={style.labelCheckbox}>
                {label}
            </label>
        </div>
    );

}

export default Checkbox;