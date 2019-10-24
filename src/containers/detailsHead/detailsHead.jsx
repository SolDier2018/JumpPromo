import React, {Component, Fragment} from 'react';

import style from './detailsHead.module.css';



class DetailsHead extends Component {

    constructor(props) {
        super(props);
        this.openMenu = this.openMenu.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
    }

    openMenu() {
        return(
            this.props.menuOpen(true)
        )
    }

    hideDetails() {
        return(
            this.props.hideDetails(false)
        )
    }

    render() {
        return (
            <div className={style.detailsHeadWrap}>
                <button type="button" className={style.toOrderList} onClick={this.hideDetails}>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L1 9L9 17" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <p className={style.detailsHeadName}>{this.props.title}</p>
                <button type="button" className={style.burgerMenu} onClick={this.openMenu}>
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V2H16V0ZM16 6H0V8H16V6Z"
                              fill="#333333"/>
                    </svg>
                </button>
            </div>
        );
    }
}

export default DetailsHead;