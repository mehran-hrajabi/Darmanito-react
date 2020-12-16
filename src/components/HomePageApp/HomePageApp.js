import React from "react";
import download from '../../assets/img/download_badge.svg';
import bazaar from '../../assets/img/bluebazaar_badge.svg';
import sib from '../../assets/img/bluesib_badge.svg';
import phone from '../../assets/img/app_phone.svg';

const homeApp = () => {
    return (
        <div className="app">
            <div className="app_body">
                <h1>دانلود اپلیکیشن درمانیتو</h1>
                <p>برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                <div>
                    <input type="text" placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
                    <button type="button">بفرست</button>
                </div>

                <div className="app_badge">
                    <a href="#"><img src={download} /></a>
                    <span>دانلود مستقیم</span>
                    <a href="#"><img src={bazaar} /></a>
                    <a href="#"><img src={sib} /></a>
                </div>
            </div>

            <img src={phone} alt="دانلود اپلیکیشن درمانیتو" />
        </div>
    )
};

export default homeApp ;