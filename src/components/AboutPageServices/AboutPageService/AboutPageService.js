import React from 'react';
import '../../../assets/sass/components/AboutPageServices/AboutPageService/_aboutPageService.scss';

const AboutService = (props) => {
    return(
        <div className="about-service_body">
            <img src={props.img} alt={props.alt} />
            <div className="about-service_info">
                <h4>{props.title}</h4>
                <p>{props.children}</p>
                <div><button>ثبت نام</button></div>
            </div>
        </div>
    );
}

export default AboutService;