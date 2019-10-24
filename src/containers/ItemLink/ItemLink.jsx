import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './ItemLink.module.css';

class ItemLink extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        return (
            this.props.click(true)
        )
    }

    render() {

        const {to, title, description, attr, noWrap, fontWeight} = this.props;

        return (
            <Link to={to} className={style.link} onClick={this.onClick}>

                <p
                    className={style.title}
                    style={{
                        whiteSpace: noWrap ? 'nowrap' : 'normal',
                        gridColumn: attr === '' ? '1/3' : '1',
                        fontWeight: fontWeight || fontWeight === undefined ? 'bold' : 'normal'
                    }}
                >
                    {title}
                </p>

                <span>{attr}</span>

                <p className={style.description}
                   style={{whiteSpace: noWrap ? 'nowrap' : 'normal', gridColumn: attr === '' ? '1/3' : '1'}}>
                    {description}
                </p>

            </Link>
        );
    }
}

export default ItemLink;