import React from 'react';
import doctor from '../../assets/img/header_doctor.svg';

const homeHeader = () => {
    return(
        <div className="header">
            <div className="header_appDl">
                <h1>اپلیکیشن درمانیتو</h1>
                <p>درمانیتو، سامانه هوشمند درمان و سلامت</p>
                <div>
                    <button type="button" id="header_dlBtn">دانلود درمانیتو</button>
                    <button type="button" id="header_membershipBtn">عضویت داروخانه ها</button>
                </div>
            </div>

            <img src={doctor} alt="Doctor" />
        </div>
    )
};

export default homeHeader;