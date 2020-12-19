import React from "react";
import Logo from './Logo';
import NavLinks from './NavLinks';
import DownloadBtn from './DownloadBtn';
import '../../assets/sass/components/Navbar/_navbar';

const navbar = () => {
    return (
        <div class="main-nav">
            <Logo />
            <NavLinks />
            <DownloadBtn />
        </div>
    )
}

export default navbar;