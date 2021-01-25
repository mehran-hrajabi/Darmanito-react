import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import Bazaar from '../../assets/img/bazaar_badge.svg';
import Sib from '../../assets/img/sib_badge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../assets/sass/components/Footer/_footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_info">
                <Logo />
                
                <h6>سوپر اپلیکیشن حوزه درمان و سلامت</h6>
                <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است.</p>

                <div className="footer_icons">
                    <a href="#"><i className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                    <a href="#"><i className="twitter"><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a href="#"><i className="instagram"><FontAwesomeIcon icon={faInstagram} /></i></a>
                </div>
            </div>

            <div className="footer_links">
                <p>خدمات درمانیتو</p>
                <a href="/">داروخانه آنلاین</a>
                <a href="/">فروشگاه آنلاین</a>
                <a href="/">ویزیت آنلاین</a>
                <a href="/">پرونده پزشکی</a>
            </div>

            <div className="footer_links">
                <p>صفحات درمانیتو</p>
                <NavLink to="/contact" exact>تماس با ما</NavLink>
                <NavLink to="/about" exact>درباره ما</NavLink>
                <NavLink to="/faq" exact>سوالات متداول</NavLink>
                <NavLink to="/terms" exact>قوانین و شرایط</NavLink>
            </div>

            <div className="footer_badges">
                <p>دانلود درمانیتو</p>

                <div>
                    <a href="#"><img src={Bazaar} alt="اپلیکیشن بازار"/></a>
                    <a href="#"><img src={Sib} alt="اپلیکیشن سیب" /></a>
                </div>
            </div>
    </div>
    );
};

export default Footer;