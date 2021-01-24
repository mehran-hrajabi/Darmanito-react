import React from "react";
import Modal from '../UI/Modal/Modal';
import homeRegistry from "../HomePageRegistry/HomePageRegistry";
import download from '../../assets/img/download_badge.svg';
import bazaar from '../../assets/img/bluebazaar_badge.svg';
import sib from '../../assets/img/bluesib_badge.svg';
import phone from '../../assets/img/app_phone.svg';
import '../../assets/sass/components/HomePageApp/_homePageApp.scss';

class homeApp extends homeRegistry {
    render(){
        let modal = null;
        if(this.state.showModal){
            modal = (
                <Modal show={this.state.showModal} title="ارسال موفق" txt="لینک دانلود برای شما ارسال شد.">
                    <button onClick={this.closeModal}>برگشت</button>
                </Modal>
            );
        }

        return (
            <div>
                {modal}

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