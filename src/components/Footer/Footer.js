import React from 'react';
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
                
                <h3>سوپر اپلیکیشن حوزه درمان و سلامت</h3>
                <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است.</p>

                <div className="footer_icons">
                    <a href="#"><i className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                    <a href="#"><i className="twitter"><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a href="#"><i className="instagram"><FontAwesomeIcon icon={faInstagram} /></i></a>
                </div>
            </div>

            <div className="footer_links">
                <p>خدمات درمانیتو</p>
                <a href="#" id="current">داروخانه آنلاین</a>
                <a href="#">فروشگاه آنلاین</a>
                <a href="#">ویزیت آنلاین</a>
                <a href="#">پرونده پزشکی</a>
            </div>

            <div className="footer_links">
                <p>صفحات درمانیتو</p>
                <a href="#">تماس با ما</a>
                <a href="#">درباره ما</a>
                <a href="#">سوالات متداول</a>
                <a href="#">قوانین و شرایط</a>
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