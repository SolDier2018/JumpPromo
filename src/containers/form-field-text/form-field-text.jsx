import React, {Component, Fragment} from 'react';


import {nl2br} from '../../utils/formater';

import style from './fieldText.module.css';

class FormFieldText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            title: props.title,
            value: props.value,
            prevValue: props.value
        };

        this.saveChange = this.saveChange.bind(this);
        this.closeSave = this.closeSave.bind(this);
    }

    saveChange() {
        const value = this.state.value;
        const prevValue = this.state.prevValue;

        if (value !== this.state.prevValue) {
            this.props.onChange(value);

            this.setState({prevValue: value, editable: false});
        } else {
            this.setState({value: prevValue, editable: false});
        }
    }

    closeSave() {
        const prevValue = this.state.prevValue;
        this.setState({value: prevValue, editable: false});
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.editable
                        ?
                        <Fragment>
                            <p><b>{this.state.title}</b></p>

                            <textarea
                                name=""
                                id=""
                                value={this.state.value}
                                className={style.textarea}
                                onChange={(e) => this.setState({value: e.target.value})}
                                style={{minHeight: this.props.minHieght + 'px'}}
                            />

                            <div className={style.controlElements}>
                                <button type={'button'} className={style.save} onClick={this.saveChange}>Сохранить</button>
                                <button type={'button'} className={style.closeEdit} onClick={this.closeSave}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z"
                                              fill="#333333"/>
                                    </svg>
                                </button>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <p><b>{this.props.title}</b></p>
                            <div onClick={() => {this.setState({editable: true})}}>
                                {nl2br(this.state.value)}
                            </div>
                        </Fragment>

                }
            </Fragment>
        );
    }
}

export default FormFieldText;