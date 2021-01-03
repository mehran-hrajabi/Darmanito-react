import React from 'react';

import Service from '../RegistryPageService/RegistryPageService';
import '../../assets/sass/components/RegistryPageServicesContainer/_registryPageServicesContainer.scss';

import Pharmacy from '../../assets/img/pharmacy.svg';
import Cosmetics from '../../assets/img/shop.svg';

const servicesContainer = () => {
    return(
        <div className="registry-services_container">
            <h4>در درمانیتو چه خدماتی ارائه خواهید داد؟</h4>
            <p class="mt-3">خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
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