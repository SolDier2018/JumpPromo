import React, {Component, Fragment} from 'react';

import style from './field.module.css';

class FormFieldTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            value: props.value,
            prevValue: props.value
        };
    }

    onBlur = (e) => {
        const value = this.state.value;
        const prevValue = this.state.prevValue;

        if (value !== prevValue) {
            this.props.onChange(value);
            this.setState({prevValue: value, editable: false});
        }
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.editable
                    ? <textarea onBlur={this.onBlur} value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} className={style.itemName + ' ' + style.textarea}></textarea>
                    : <div onClick={()=> this.setState({editable: true})} className={style.itemName}>{this.state.value}</div>
                }
            </Fragment>
        );
    }
}

export default FormFieldTitle;