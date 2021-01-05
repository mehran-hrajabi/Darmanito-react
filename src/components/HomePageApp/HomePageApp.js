import React, {Component} from "react";
import Modal from '../UI/Modal';

import download from '../../assets/img/download_badge.svg';
import bazaar from '../../assets/img/bluebazaar_badge.svg';
import sib from '../../assets/img/bluesib_badge.svg';
import phone from '../../assets/img/app_phone.svg';

import '../../assets/sass/components/HomePageApp/_homePageApp.scss';
import '../../assets/sass/base/_btnCursor.scss';


class homeApp extends Component {
    state = {
        showModal: false,
        isValid : false
    }

    phoneValidation = (event) => {
        let number = event.target.value;
        if(number.length == 11 && number.slice(1,11) > 9000000000 && number.slice(0,0) == 0){
            this.setState({isValid: true});
        }
        else{
            this.setState({isValid: false});
        }
    }
    showModal = () => {
        if(this.state.isValid){
            this.setState({showModal: true});
        }
    }
    closeModal = () => {
        this.setState({showModal: false, isValid: false});
    }

    render(){
        let modal = null;
        let btnClass = "forbidden";

        if(this.state.showModal){
            modal = (
                <Modal show={this.state.showModal} title="ارسال موفق" txt="لینک دانلود برای شما ارسال شد.">
                    <button onClick={this.closeModal}>برگشت</button>
                </Modal>
            );
        }
        if(this.state.isValid){
            btnClass = "allowed";
        }

        return (
            <div>
                {modal}

                <div className="home-app">
                    <div className="home-app_body">
                        <h1>دانلود اپلیکیشن درمانیتو</h1>
                        <p>برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                        <div>
                            <input onChange={this.phoneValidation} type="text"
                            placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
                            <button className={btnClass} onClick={this.showModal} type="button">بفرست</button>
                        </div>

                        <div className="home-app_badge">
                            <a href="#"><img src={download} /></a>
                            <span>دانلود مستقیم</span>
                            <a href="#"><img src={bazaar} /></a>
                            <a href="#"><img src={sib} /></a>
                        </div>
                    </div>

                    <img src={phone} alt="دانلود اپلیکیشن درمانیتو" />
                </div>                
            </div>

        );        
    }
};

export default homeApp ;