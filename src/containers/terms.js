import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar/Navbar';
import Header from '../components/OtherPagesHeader/OtherPagesHeader';
import Body from '../components/TermsPageBody/TermsPageBody/TermsPageBody';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const terms = () => {
    return(
        <div className="terms-grid">
            <Navbar />
            <Header title="قوانین و شرایط" />
            <Body />
            <Support />
            <Footer />
        </div>
    )
}

export default terms;