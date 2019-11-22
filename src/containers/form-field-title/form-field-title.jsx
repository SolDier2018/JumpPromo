import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Textarea from '../../ui/textarea/TextArea';

import style from './field.module.css';

class FormFieldTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            rows: 0,
            value: props.value,
            prevValue: props.value
        };
    }

    onFocus = () => {
        const value = this.state.value.match(/\n/g);
        const numberLines = value === null ? 1 : value.length + 1; //Возвращает количество переносов строк
        this.setState({
            rows: numberLines
        });
    };

    onBlur = () => {
        const value = this.state.value;
        const prevValue = this.state.prevValue;

        if (value !== prevValue) {
            this.props.onChange(value);
            this.setState({prevValue: value, editable: false});
        } else {
            this.setState({editable: false});
        }
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.editable
                        ? <Textarea
                            rows={this.state.rows}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            value={this.state.value}
                            onChange={(e) => this.setState({value: e.target.value})}
                            className={style.itemName + ' ' + style.textarea}
                            autoFocus={true}
                        />
                        : <div
                            onClick={() => {this.setState({editable: true})}}
                            className={style.itemName}>
                            {this.state.value}
                        </div>
                }
            </Fragment>
        );
    }
}

FormFieldTitle.defaultProps = {
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laboriosam!',
    onChange: () => {
    }
};

FormFieldTitle.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default FormFieldTitle;