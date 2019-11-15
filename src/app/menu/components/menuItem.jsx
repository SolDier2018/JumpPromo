import React, {Component, Fragment, createRef} from 'react';
import {Link} from "react-router-dom";

import style from '../css/menu.module.css';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.selectPage = this.selectPage.bind(this);
        this.clickSubMenu = this.clickSubMenu.bind(this);
        this.refLink = createRef();
    }

    selectPage() {
        this.props.onClick(this.refLink.current.innerText);
    }

    clickSubMenu() {
        this.props.onClick(this.refLink.current.innerText);
    }

    render() {

        const {to, label, submenu, icon, count, active, iconActive} = this.props;
        
        return (
            <Fragment>
                <li className={active ? style.openSubmenu : ''}>

                     <img src={active ? iconActive : icon} alt=""/>

                    <div>
                        <Link to={to} className={style.badgest} onClick={this.selectPage} >
                            <p ref={this.refLink}>{label}</p>
                            <span>{count}</span>
                            {
                                submenu.length === 0
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
                            submenu.map((s) => {
                                return (
                                    <Link to={s.path} key={s.path} onClick={this.clickSubMenu}>
                                        <p>{s.label}</p>
                                        <span></span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </li>
            </Fragment>
        );
    }
}

export default MenuItem;