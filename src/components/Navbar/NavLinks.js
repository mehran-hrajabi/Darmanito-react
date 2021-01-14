import React from 'react';
import {NavLink} from 'react-router-dom';

const navLinks = () => {
    return (
        <div className="main-nav_menu">
            <NavLink to="/" exact>صفحه اصلی</NavLink>
            <NavLink to="/about" exact>درباره ما</NavLink>
            <NavLink to="/contact" exact>تماس با ما</NavLink>
            <NavLink to="/registry" exact>عضویت داروخانه ها</NavLink>
        </div>
    )
};

export default navLinks;