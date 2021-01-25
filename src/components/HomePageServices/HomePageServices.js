import React from 'react';
import Pharmacy from '../../assets/img/pharmacy_icon.svg';
import Shop from '../../assets/img/shop_icon.svg';
import Visit from '../../assets/img/visit_icon.svg';
import Reserve from '../../assets/img/reserve_icon.svg';
import Arrow from '../../assets/img/arrow.svg';
import Done from '../../assets/img/done_icon.svg';
import '../../assets/sass/components/HomePageServices/_homePageServices.scss';

const HomeServices = () => {
    return (
        <div className="home-service">
            <h4>امکانات درمانیتو</h4>

            <div className="home-service_body">
                <div className="home-service_items">
                    <div>
                        <div className="home-service_items_container opacityBlur" id="active">
                            <img src={Pharmacy} alt="داروخانه" />
                            <span>داروخانه</span>
                        </div>
                        <div className="home-service_items_container opacityBlur">
                            <img src={Shop} alt="فروشگاه" />
                            <span>فروشگاه</span>
                        </div>
                    </div>

                    <div>
                        <div className="home-service_items_container opacityBlur">
                            <img src={Visit} alt="ویزیت آنلاین" />
                            <span id="alignment_exception1">ویزیت آنلاین</span>
                        </div>
                        <div className="home-service_items_container opacityBlur">
                            <img src={Reserve} alt="رزرو آنلاین" />
                            <span id="alignment_exception2">نوبت دهی آنلاین</span>
                        </div>    
                    </div>
                </div>

                <div className="home-service_description">
                    <div className="home-service_txt">
                        <p>داروخانه آنلاین</p>
                        <p>در سرویس داروخانه شما میتوانید نسخه دارویی یا 
                            محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید. </p>
                    </div>
                    <div className="home-service_steps">
                        <div id="vertical_line"></div>

                        <img id="step1" src={Arrow} alt="" />
                        <p className="home-step_title">قدم اول</p>
                        <p className="home-step_description">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید.</p>

                        <img id="step2" src={Arrow} alt="" />
                        <p className="home-step_title">قدم دوم</p>
                        <p className="home-step_description">بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید.</p>

                        <img id="step3" src={Done} alt="" />
                        <p className="home-step_title">قدم سوم</p>
                        <p className="home-step_description">اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeServices;