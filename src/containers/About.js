import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/AboutPageHeader/AboutPageHeader';
import Stats from '../components/AboutPageStats/AboutPageStats';
import Services from '../components/AboutPageServices/AboutPageServicesContainer';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const about = () => {
    return (
        <div className="about-grid">
            <Navbar />
            <Header />
            <Stats />
            <Services />
            <Support />
            <Footer />            
        </div>
    );
}

export default about;