import React from 'react';
import darmanito from '../../assets/img/navbar_icon.svg';

const logo = () => {
    return(
        <div className="darmanito_logo">
            <a href="#"><img src={darmanito} /></a>
            <div>
                <h3>درمانیتو</h3>
                <p>همراه شما در درمان</p>
            </div>
        </div>
    )
};

export default logo;