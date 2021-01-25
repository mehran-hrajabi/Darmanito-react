import React from 'react';
import Badge from '../../assets/img/support_icon.svg';
import '../../assets/sass/components/Support/_support.scss';

const Support = () => {
    return (
        <div className="support">
            <div>
                <h4>پشتیبانی درمانیتو</h4>
                <p>پاسخگویی در روزهای کاری از 9 صبح تا 9 شب</p>
            </div>
            <div>
                <img src={Badge} alt="پشتیبانی"/>
                <span>پشتیبانی : ۰۲۱۴۴۲۱۹۶۷۱</span>
            </div>
        </div>
    )
};

export default Support;