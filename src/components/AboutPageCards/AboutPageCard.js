import React from 'react';
import Marker from '../../assets/img/map_marker.svg';
import '../../assets/sass/components/AboutPageCards/_aboutPageCard.scss';

const aboutCard = (props) => {
    let classes = ['about-card'];
    let badge = null;

    if(props.isBig){
        classes.push('big'); 
    }
    else if(!props.isBig){
        classes.push('small');
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
            <img src={props.children} />
            <div className="about-card_body">
                <h4>{props.title}</h4>
                <div>
                    <img src={Marker} />
                    <p>درمانیتو ، سرویس داروخانه ، داروخانه {props.name}</p>
                </div>   
            </div>
            {badge}
        </div>
    );
}

export default aboutCard;