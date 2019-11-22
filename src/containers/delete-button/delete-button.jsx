import React, {Component, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import style from "./deleteButton.module.css";

class DeleteButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false
        };
        this.refButton = createRef();
        this.buttonDelete = createRef();
        document.addEventListener('click', this.handleClickOut, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOut, false);
    }

    handleClickOut = (e) => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                editable: false
            });
        }
    };

    render() {
        const {background, onClick} = this.props;
        return (
            <Fragment>
                {
                    this.state.editable
                        ?
                        <div className={style.active}>
                            <button
                                type={'button'}
                                className={style.editTitle}
                                style={{'background': this.state.background}}
                                onClick={() => {
                                    this.setState({editable: true})
                                }}
                                ref={this.refButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                                          fill="#333333"/>
                                </svg>
                            </button>
                            <button
                                type={'button'}
                                className={style.delete}
                                onClick={onClick}
                                ref={this.buttonDelete}>
                                Удалить
                            </button>
                        </div>
                        :
                        <div className={style.notActive}>
                            <button
                                type={'button'}
                                className={style.editTitle}
                                onClick={() => {
                                    this.setState({editable: true})
                                }}
                                style={{'background': background}}
                                ref={this.refButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                                          fill="#333333"/>
                                </svg>
                            </button>
                        </div>
                }
            </Fragment>
        );
    }
}

DeleteButton.defaultProps = {
    background: '#F4F5F7',
    onClick: () => {}
};

DeleteButton.propTypes = {
    background: PropTypes.string,
    onClick: PropTypes.func
};

export default DeleteButton;