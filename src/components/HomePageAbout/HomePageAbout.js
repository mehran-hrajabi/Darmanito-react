import React from 'react';
import Phone from '../../assets/img/about_phone.svg';
import Tic from '../../assets/img/tic_icon.svg';
import Efficient from '../../assets/img/efficient_icon.svg';
import Easy from '../../assets/img/easy_icon.svg';
import Search from '../../assets/img/search_icon.svg';
import '../../assets/sass/components/HomePageAbout/_homePageAbout.scss';

const HomeAbout = () => {
    return (
        <div className="home-about">
            <img src={Phone} alt="درباره درمانیتو" />

            <div className="home-about_body">
                <div className="home-about_txt">
                    <h4>درباره درمانیتو</h4>
                    <p>درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی،
                        نوبت گیری و مشاوره پزشکان را به راحتی و به صورت آنلاین فراهم کرده است.</p>
                </div>

                <div className="home-about_items">
                    <div>
                        <img src={Tic} alt="جستجوی سریغ" />
                        <p>جستجوی سریع</p>
                    </div>
                    <div>
                        <img src={Efficient} alt="به صرفه" />
                        <p>به صرفه</p>
                    </div>
                    <div>
                        <img src={Easy} alt="راحت" />
                        <p>راحت</p>
                    </div>
                    <div>
                        <img src={Search} alt="جستجوی سریع" />
                        <p>جستجوی سریع</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;