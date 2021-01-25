import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import '../../../assets/sass/components/Navbar/_navbar.scss';

const HamburgerMenu = (props) =>{
    return(
        <div className="hamburger_menu">
            <div className="menu_logo">
                <Logo />
            </div>

            {props.children}

            <div className="hamburger_body">
                <Link to="/" exact>صفحه اصلی</Link>
                <Link to="/registry" exact>عضویت داروخانه ها</Link>
                <Link to="/about" exact>درباره ما</Link>
                <Link to="/contact" exact>تماس با ما</Link>
                <Link to="/faq" exact>سوالات متداول</Link>
                <Link to="/terms" exact>قوانین و شرایط</Link>
                <hr />
                <DownloadBtn />
            </div>
        </div>
    );
}

export default HamburgerMenu;