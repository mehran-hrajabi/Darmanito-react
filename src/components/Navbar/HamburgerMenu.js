import React from 'react';
import Logo from '../UI/Logo';
import DownloadBtn from './DownloadBtn';

import '../../assets/sass/components/Navbar/_navbar.scss';


const hamburgerMenu = (props) =>{
    return(
        <div className="hamburger_menu">
            <div className="menu_logo">
                <Logo />
            </div>

            {props.children}

            <div className="hamburger_body">
                <a>صفحه اصلی</a>
                <a>عضویت در داروخانه ها</a>
                <a>درباره ما</a>
                <a>تماس با ما</a>
                <a>سوالات متداول</a>
                <a>قوانین و شرایط</a>
                <hr />
                <DownloadBtn />
            </div>
        </div>
    );
}

export default hamburgerMenu;