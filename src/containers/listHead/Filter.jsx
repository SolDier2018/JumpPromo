import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../../ui/button/button';

import style from './listHead.module.css';
import kit from "../../app/kit.module.css";

class Filter extends Component {

    static defaultProps = {
      label: 'Передайте props - label',
      onClick: () => console.error('Передайте props - onClick')
    };

    static propTypes = {
      label: PropTypes.string,
      onClick: PropTypes.func
    };

    state = {
        active: false
    };

    handleClick = () => {
        const {onClick} = this.props;
        onClick();
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        const {label} = this.props;
        const {active} = this.state;
        return(
            <div className={style.contentMenuFilter + ' ' + (active ? style.activeFilter : '')}>
                <Button
                    type={'button'}
                    className={kit.transparent + ' ' + style.buttonFilter}
                    onClick={this.handleClick}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2 4.99999H14V5.99999H2V4.99999ZM4 7.99999H12V8.99999H4V7.99999ZM10 11H6V12H10V11Z"
                              fill=""/>
                    </svg>
                    <p>{label}</p>
                </Button>
            </div>
        )
    }
}
export default Filter;