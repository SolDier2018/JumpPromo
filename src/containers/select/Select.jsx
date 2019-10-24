import React, {Component, Fragment} from 'react';

import style from './select.module.css';

class Select extends Component {

    constructor(props) {
        super(props);

        this.state = {
            option: props.option,
            label: props.label
        }
    }

    displayLabel() {
        return(
            this.state.label === ''
                ? ''
                : <label htmlFor="" className={style.label}><b>{this.state.label}</b></label>
        )
    }

    render() {

        const {option} = this.state;

        return (
            <Fragment>
                {this.displayLabel()}
                <select name="" id="" className={style.select}>
                    {
                        option.map((e) => {
                            return(
                                <option value="" key={e}>{e}</option>
                            )
                        })
                    }
                </select>
            </Fragment>
        );
    }
}

export default Select;