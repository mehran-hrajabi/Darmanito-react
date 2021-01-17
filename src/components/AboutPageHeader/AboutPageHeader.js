import React from 'react';
import Info from '../AboutPageInfo/AboutPageInfo';
import Cards from '../AboutPageCards/AboutPageCardContainer';
import '../../assets/sass/components/AboutPageHeader/_aboutPageHeader.scss';

const aboutHeader = () => {
    return(
        <div className="about-header">
            <Info />
            <Cards />
        </div>
    );
}

export default aboutHeader;