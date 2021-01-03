import React from 'react';

import Person from '../../assets/img/person_icon.svg';
import Marker from '../../assets/img/map_marker.svg';

import '../../assets/sass/components/RegistryPageCards/_registryPageCard.scss';

const registryCard = (props) => {
    let classes = ['registry-card'];
    let badge = null;

    if(props.size == "small"){
        classes.push('small');
    }
    else if(props.size == "big"){
        classes.push('big');
    }

    if(props.isBlur){
        classes.push('blur');
    }

    if(props.badge){
        badge = (
            <span>شبانه روزی</span>
        );
    }

    return(
        <div className={classes.join(' ')}>
            <img src={Person} />
            <div className="registry-card_body">
                <h4>نام داروخانه شما</h4>
                <div>
                    <img src={Marker} />
                    <p>درمانیتو ، سرویس داروخانه ، داروخانه شما</p>
                </div>   
            </div>
            {badge}
        </div>
    );
}

export default registryCard;