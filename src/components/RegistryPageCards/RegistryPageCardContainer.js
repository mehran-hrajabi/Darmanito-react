import React from "react";
import Card from './RegistryPageCard';
import Person from '../../assets/img/person_icon.svg';
import '../../assets/sass/components/RegistryPageCards/_registryPageCardContainer.scss';

const registryCards = () => {
    let cardInfo = ['نام داروخانه شما', 'شما'];
    return(
        <div className="registry-card_container">
            <Card isBig={true} isBlur={false} badge={true} title={cardInfo[0]} name={cardInfo[1]}>
                {Person}
            </Card>
            <Card isBig={false} isBlur={false} badge={false} title={cardInfo[0]} name={cardInfo[1]}>
                {Person}
            </Card>
            <Card isBig={false} isBlur={true} badge={true} title={cardInfo[0]} name={cardInfo[1]}>
                {Person}
            </Card>
        </div>            
    );
}

export default registryCards;