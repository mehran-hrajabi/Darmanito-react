import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar/Navbar';
import Header from '../components/OtherPagesHeader/OtherPagesHeader';
import Body from '../components/FAQPageBody/FAQPageBody';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const faq = () => {
    return(
        <div className="faq-grid">
            <Navbar />
            <Header title="سوالات متداول" />
            <Body />
            <Support />
            <Footer />
        </div>
    )
}

export default faq;