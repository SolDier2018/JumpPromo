import React, {Component} from 'react';

import style from './button.module.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            name: props.name,
            transparent: props.transparent,
            click: false
        };
    }

    render() {

        const {type, name, transparent} = this.state;

        return (
            <button
                type={type}
                className={transparent ? style.transparent : style.button}
            >
                {name}
            </button>
        );
    }
}

export default Button;