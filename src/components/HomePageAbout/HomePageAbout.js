import React from 'react';
import phone from '../../assets/img/about_phone.svg';
import tic from '../../assets/img/tic_icon.svg';
import efficient from '../../assets/img/efficient_icon.svg';
import easy from '../../assets/img/easy_icon.svg';
import search from '../../assets/img/search_icon.svg';
import '../../assets/sass/components/HomePageAbout/_homePageAbout.scss';

const homeAbout = () => {
    return (
        <div className="home-about">
            <img src={phone} alt="درباره درمانیتو" />

            <div className="home-about_body">
                <div className="home-about_txt">
                    <h2>درباره درمانیتو</h2>
                    <p>درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی،
                        نوبت گیری و مشاوره پزشکان را به راحتی و به صورت آنلاین فراهم کرده است.</p>
                </div>

                <div className="home-about_items">
                    <div>
                        <img src={tic} alt="جستجوی سریغ" />
                        <p>جستجوی سریع</p>
                    </div>
                    <div>
                        <img src={efficient} alt="به صرفه" />
                        <p>به صرفه</p>
                    </div>
                    <div>
                        <img src={easy} alt="راحت" />
                        <p>راحت</p>
                    </div>
                    <div>
                        <img src={search} alt="جستجوی سریع" />
                        <p>جستجوی سریع</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homeAbout;