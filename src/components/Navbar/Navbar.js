import React, {Component} from "react";
import Logo from '../UI/Logo';
import NavLinks from './NavLinks';
import DownloadBtn from './DownloadBtn';
import Hamburger from './HamburgerMenu';

import Icon from '../../assets/img/menu_icon.svg';
import Close from '../../assets/img/close_btn.svg';
import '../../assets/sass/components/Navbar/_navbar.scss';

class navbar extends Component {
    state = {
        showMenu: false
    }

    hamburgerMenuHandler = () => {
        let doesShow = this.state.showMenu;
        this.setState({showMenu: !doesShow});
    }
    render(){
        let hamburgerMenu = null;
        if(this.state.showMenu){
            hamburgerMenu = <Hamburger>
                                <a onClick={this.hamburgerMenuHandler}><img src={Close} /></a>
                            </Hamburger>
        }

        return (
            <div className="main-nav">
                <Logo />
                <NavLinks />
                <DownloadBtn />
                <div className="hamburger_icon">
                    <img src={Icon} onClick={this.hamburgerMenuHandler} />
                </div>
                {hamburgerMenu}
            </div>
        );
    }
}

export default navbar;