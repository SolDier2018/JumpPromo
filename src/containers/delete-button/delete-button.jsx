import React, {Component, Fragment, createRef} from 'react';
import style from "./deleteButton.module.css";

class DeleteButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            background: props.background
        };
        this.handleClickOut = this.handleClickOut.bind(this);
        this.refButton = createRef();
        this.buttonDelete = createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.addEventListener('click', this.handleClickOut, false);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    componentWillUnmount() {
        document.addEventListener('click', this.handleClickOut, false);
        this.setState({
            editable: false
        });
    }

    handleClickOut(e) {
        const buttonBlock = this.refButton.current;

        if (!e.path.includes(buttonBlock)) {
            const deleteButton = this.buttonDelete.current;
            if (!e.path.includes(deleteButton)) {
                this.setState({editable: false})
            }
        }
    }

    render() {
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
                                style={{'background': this.state.background}}
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

export default DeleteButton;