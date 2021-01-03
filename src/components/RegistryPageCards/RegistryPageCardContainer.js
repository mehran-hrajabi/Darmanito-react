import React from "react";

import Card from './RegistryPageCard';

import '../../assets/sass/components/RegistryPageCards/_registryPageCardContainer.scss';

const registryCards = () => {
    return(
        <div className="registry-card_container">
            <Card size="big" isBlur={false} badge={true} />
            <Card size="small" isBlur={false} badge={false} />
            <Card size="small" isBlur={true} badge={true} />
        </div>            
    );
}

export default registryCards;