import React, {Component, Fragment} from 'react';

import style from './input.module.css';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.Change = this.Change.bind(this);
    }

    Change(e) {
        this.setState({
            value: e.target.value
        }, () => {this.props.onChange(this.state.value)});
    }


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
                    onChange={this.Change}
                />
            </div>
        );
    }
}

export default Input;