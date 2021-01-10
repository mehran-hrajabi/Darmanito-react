import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/RegistryPageHeader/RegistryPageHeader';
import Stats from '../components/RegistryPageStats/RegistryPageStats';
import Services from '../components/RegistryPageServices/RegistryPageServicesContainer';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

const registry = () => {
    return (
        <div className="registry-grid">
            <Navbar />
            <Header />
            <Stats />
            <Services />
            <Support />
            <Footer />            
        </div>
    );
}

export default registry;