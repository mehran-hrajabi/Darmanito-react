import React from 'react';
import doctor from '../../assets/img/header_doctor.svg';
import '../../assets/sass/components/HomePageHeader/_homePageHeader.scss';

const homeHeader = () => {
    return(
        <div className="home-header">
            <div className="home-header_appDl">
                <h1>اپلیکیشن درمانیتو</h1>
                <p>درمانیتو، سامانه هوشمند درمان و سلامت</p>
                <div>
                    <button type="button" id="home-header_dlBtn">دانلود درمانیتو</button>
                    <button type="button" id="home-header_membershipBtn">عضویت داروخانه ها</button>
                </div>
            </div>

            <img src={doctor} alt="Doctor" />
        </div>
    )
};

export default homeHeader;