import React, {Component} from 'react';

import style from './input.module.css';

class Input extends Component {

    render() {

        const {id, label} = this.props;
        return (
            <div>
                {label === '' || label === undefined ? '' : <label htmlFor={id} className={style.label}><b>{label}</b></label>}
                <input
                    type={this.props.type === null ? 'text' : this.props.type}
                    id={id}
                    className={this.props.error ? style.inputError : style.input}
                    placeholder={this.props.placeholder}
                    onChange={(e) => {
                        const value = e.target.value;
                        this.props.onChange(value);
                    }}
                    autoComplete={'on'}
                />
            </div>
        );
    }
}

export default Input;