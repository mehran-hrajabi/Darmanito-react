import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../UI/Logo';
import bazaar from '../../assets/img/bazaar_badge.svg';
import sib from '../../assets/img/sib_badge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../assets/sass/components/Footer/_footer.scss';

const footer = () => {
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
                <NavLink to="/online-pharmacy" exact>داروخانه آنلاین</NavLink>
                <NavLink to="/online-shop" exact>فروشگاه آنلاین</NavLink>
                <NavLink to="/online-visit" exact>ویزیت آنلاین</NavLink>
                <NavLink to="/medical-case" exact>پرونده پزشکی</NavLink>
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
                    <a href="#"><img src={bazaar} /></a>
                    <a href="#"><img src={sib} /></a>
                </div>
            </div>
    </div>
    );
};

export default footer;