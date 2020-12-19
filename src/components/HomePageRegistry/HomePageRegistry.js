import React from 'react';
import doctor from '../../assets/img/register.svg';
import RegistryInput from './RegisteryInput';
import "../../assets/sass/components/HomePageRegistry/_homePageRegistry.scss";
import '../../assets/sass/base/_registryInput.scss';

const homeRegistry = () => {
    return (
        <div class="home-register">
            <div class="home-register_body">    
                <h2>عضویت داروخانه یا مراکز درمانی</h2>
                <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و
                    کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست.</p>

                <RegistryInput />
            </div>

            <img src={doctor} alt="عضویت در درمانیتو" />
        </div>
    )
};

export default homeRegistry;