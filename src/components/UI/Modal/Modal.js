import React from 'react';
import Img from '../../../assets/img/modal.svg';
import '../../../assets/sass/components/UI/Modal/_modal.scss';

const modal = (props) => {
    return(
        <div className="modal">
            <img src={Img} />
            <h4>{props.title}</h4>
            <p>{props.txt}</p>
            {props.children}
        </div>                
    );        
}

export default modal;