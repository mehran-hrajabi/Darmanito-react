import React, {Component} from "react";
import Modal from '../UI/Modal/Modal';
import Download from '../../assets/img/download_badge.svg';
import Bazaar from '../../assets/img/bluebazaar_badge.svg';
import Sib from '../../assets/img/bluesib_badge.svg';
import Phone from '../../assets/img/app_phone.svg';
import '../../assets/sass/components/HomePageApp/_homePageApp.scss';

class HomeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            isValid: false
        }
        this.modal = null;
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
        this.modal = (
            <Modal show={this.state.showModal} title="ارسال موفق" txt="لینک دانلود برای شما ارسال شد.">
                <button onClick={this.closeModal}>برگشت</button>
            </Modal>
        );
    }
    closeModal = () => {
        this.setState({showModal: false, isValid: false});
        this.modal = null;
    }

    render(){
        return (
            <div>
                {this.modal}

                <div className="home-app">
                    <div className="home-app_body">
                        <h3>دانلود اپلیکیشن درمانیتو</h3>
                        <p>برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                        <div>
                            <input onChange={this.phoneValidation} type="number"
                            placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
                            <button onClick={this.showModal} disabled={!this.state.isValid} type="button">
                                بفرست
                            </button>
                        </div>

                        <div className="home-app_badge">
                            <a href="#"><img src={Download} alt="دانلود درمانیتو" /></a>
                            <span>دانلود مستقیم</span>
                            <a href="#"><img src={Bazaar} alt="دانلود از بازار" /></a>
                            <a href="#"><img src={Sib} alt="دانلود از سیب" /></a>
                        </div>
                    </div>

                    <img src={Phone} alt="دانلود اپلیکیشن درمانیتو" />
                </div>                
            </div>

        );        
    }
};

export default HomeApp ;