import React, {Component} from 'react';

import style from './button.module.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick()
    }

    render() {

        const {type, name, transparent} = this.props;

        return (
            <button
                type={type}
                className={transparent ? style.transparent : style.button}
                onClick={this.onClick}
            >
                {name}
            </button>
        );
    }
}

export default Button;