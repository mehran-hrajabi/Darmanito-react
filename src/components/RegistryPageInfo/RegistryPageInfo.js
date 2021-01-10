import React from 'react';
import Register from '../RegistryInput/RegistryInput';
import '../../assets/sass/components/RegistryPageInfo/_registryPageInfo.scss';

const registryInfo = () => {
    return(
        <div className="registry-info">
            <h1>شما هم در سلامت و بهبود مردم کشورمون موثر باشید.</h1>
            <p>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید
                 و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید. </p>

            <Register />
        </div>
    );
}

export default registryInfo;