import React, {Component} from 'react';
import style from "../css/settingCompany.module.css";
import user from "../../../ui/img/user.png";
import Input from "../../../ui/input/Input";

class LogoLoading extends Component {

    state = {
        fileValue: '',
        filePath: ''
    };

    fileValue = (value) => {
        const file = value;
        const filePath = value.split("\\").pop(); //разбивает путь на массив и возвращает последний элемент
        this.setState({
            fileValue: filePath,
            filePath: file
        });
        this.props.value(value)
    };

    closeFileValue = () => {
        this.setState({
            fileValue: '',
            filePath: ''
        });
    };

    render() {
        return (
            <div className={style.fieldWrap + ' ' + style.fileInput}>
                <img src={this.state.filePath === '' ? user : this.state.filePath} alt=""/>
                <p>Логотип</p>
                <Input
                    id={'logo'}
                    label={this.state.fileValue === '' ? 'Загрузить' : this.state.fileValue}
                    type={'file'}
                    onChange={(value) => {this.fileValue(value)}}
                />
                {this.state.fileValue === ''
                    ? ''
                    :
                    <button type={'button'} className={style.closeFileValue} onClick={this.closeFileValue}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z"
                                  fill="#EC393D"/>
                        </svg>
                    </button>
                }
            </div>
        );
    }
}

export default LogoLoading;