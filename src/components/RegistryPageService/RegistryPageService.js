import React from 'react';
import '../../assets/sass/components/RegistryPageService/_registryPageService.scss';

const registryService = (props) => {
    return(
        <div className="registry-service_body">
            <img src={props.img} />
            <div className="registry-service_info">
                <h4>{props.title}</h4>
                <p>{props.children}</p>
                <div><button>ثبت نام</button></div>
            </div>
        </div>
    );
}

export default registryService;