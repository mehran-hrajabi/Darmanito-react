import React from 'react';
import Pharmacy from '../../../assets/img/pharmacy.svg';
import Cosmetics from '../../../assets/img/shop.svg';
import Service from '../AboutPageService/AboutPageService';
import '../../../assets/sass/components/AboutPageServices/AboutPageServicesContainer/_aboutPageServicesContainer.scss';

const servicesContainer = () => {
    return(
        <div className="about-services_container">
            <h4>در درمانیتو چه خدماتی ارائه خواهید داد؟</h4>
            <p>خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
            <div>
                <Service title="داروخانه" img={Pharmacy}>
                    مایلم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.
                </Service>
                <Service title="فروشگاه آرایشی و بهداشتی" img={Cosmetics}>
                مایل هستم فقط به عنوان فروشگاه آرایشی و بهداشتی فعالیت کنم و نیاز مشتریان در این زمینه را برطرف کنم .
                </Service>                
            </div>
        </div>
    );
}

export default servicesContainer;