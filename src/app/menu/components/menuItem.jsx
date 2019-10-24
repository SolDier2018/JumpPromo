import React, {Component} from 'react';
import {Link} from "react-router-dom";

import style from '../css/menu.module.css';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            to: props.to,
            label: props.label,
            submenu: props.submenu,
            icon: props.icon,
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const curentState = this.state.active;
        this.setState({
            active: !curentState
        });
    }


    render() {
        
        return (
                <li
                    className={this.state.active ? style.openSubmenu : null}
                    onClick={this.toggleClass}
                >
                    <img src={this.state.icon} alt=""/>

                    <div>

                        <Link to={this.state.to} className={style.badgest}>
                            <p>{this.state.label}</p>
                            <span>2</span>
                            {
                                this.state.submenu.length === 0
                                    ? ''
                                    : <svg width="10" height="6" viewBox="0 0 10 6" fill="#333333"
                                           xmlns="http://www.w3.org/2000/svg" className={style.dropdown}>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M0.303855 0.2821C0.70034 -0.10237 1.33343 -0.0926305 1.7179 0.303855L4.90022 3.58562L8.30352 0.28242C8.69983 -0.102233 9.33293 -0.0927836 9.71758 0.303525C10.1022 0.699834 10.0928 1.33293 9.69648 1.71758L5.57526 5.71758C5.38489 5.90235 5.1289 6.00391 4.86364 5.99989C4.59837 5.99587 4.34557 5.8866 4.16089 5.69615L0.2821 1.69615C-0.10237 1.29966 -0.0926305 0.666571 0.303855 0.2821Z"
                                              fill=""/>
                                    </svg>
                            }
                        </Link>

                        {
                            this.state.submenu.map((s) => {
                                return (
                                    <Link to={s.path} key={s.path}>
                                        <p>{s.label}</p>
                                        <span></span>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </li>
        );
    }
}

export default MenuItem;