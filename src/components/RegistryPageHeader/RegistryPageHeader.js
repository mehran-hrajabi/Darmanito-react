import React from 'react';

import Info from '../RegistryPageInfo/RegistryPageInfo';
import Cards from '../RegistryPageCards/RegistryPageCardContainer';

import '../../assets/sass/components/RegistryPageHeader/_registryPageHeader.scss';

const registryHeader = () => {
    return(
        <div className="registry-header">
            <Info />
            <Cards />
        </div>
    );
}

export default registryHeader;