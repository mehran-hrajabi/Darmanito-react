import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar/Navbar';
import Header from '../components/HomePageHeader/HomePageHeader';
import About from '../components/HomePageAbout/HomePageAbout';
import Services from '../components/HomePageServices/HomePageServices';
import AppDL from '../components/HomePageApp/HomePageApp';
import Registry from '../components/HomePageRegistry/HomePageRegistry';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const home = () => {
    return(
        <div className="home-grid">
            <Navbar />
            <Header />
            <About />
            <Services />
            <AppDL />
            <Registry />
            <Support />
            <Footer />
        </div>
    );
}

export default home;