import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = () => {
    return (
        <div className="main-nav_menu">
            <Link to="/">صفحه اصلی</Link>
            <Link to="">درباره ما</Link>
            <Link to="/contact">تماس با ما</Link>
            <Link to="/registry">عضویت داروخانه ها</Link>
        </div>
    )
};

export default navLinks;