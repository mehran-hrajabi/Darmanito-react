import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar/Navbar';
import Header from '../components/OtherPagesHeader/OtherPagesHeader';
import Body from '../components/ContactPageBody/ContactPageBody';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const contact = () => {
    return(
        <div className="contact-grid">
            <Navbar />
            <Header title="تماس با ما" />
            <Body />
            <Support />
            <Footer />
        </div>
    );
}

export default contact;