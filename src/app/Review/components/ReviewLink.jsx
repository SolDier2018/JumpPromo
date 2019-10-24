import React, {Component} from 'react';

import style from '../css/review.module.css';
import {Link} from "react-router-dom";

class ReviewLink extends Component {
    render() {
        return (
            <Link to={this.props.to}>
                <p>{this.props.title}</p>
                <span>{this.props.number}</span>
                <img src={this.props.img} alt={this.props.title} className={style.reviewIcon}/>
            </Link>
        );
    }
}

export default ReviewLink;