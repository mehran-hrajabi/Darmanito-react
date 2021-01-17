import React from 'react';
import {Link} from 'react-router-dom';
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
                <Link to="/">صفحه اصلی</Link>
                <Link to="/registry">عضویت داروخانه ها</Link>
                <Link to="">درباره ما</Link>
                <Link to="/contact">تماس با ما</Link>
                <Link to="/faq">سوالات متداول</Link>
                <Link to="/terms">قوانین و شرایط</Link>
                <hr />
                <DownloadBtn />
            </div>
        </div>
    );
}

export default hamburgerMenu;