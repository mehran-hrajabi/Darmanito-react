import React from 'react';
import {Link} from 'react-router-dom';
import Darmanito from '../../../assets/img/navbar_icon.svg';
import '../../../assets/sass/components/UI/Logo/_logo.scss';

const Logo = () => {
    return(
        <div className="darmanito_logo">
            <Link to="/"><img src={Darmanito} alt="درمانیتو" /></Link>
            <div>
                <h4>درمانیتو</h4>
                <p>همراه شما در درمان</p>
            </div>
        </div>
    );
};

export default Logo;