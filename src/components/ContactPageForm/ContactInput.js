import React from 'react';
import '../../assets/sass/components/ContactPageForm/_contactFormInput.scss';


const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case('input') :
            inputElement = <input className="input"
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
            break;
        case('textarea') :
            inputElement = <textarea className="textarea"
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
            break;
        default :
            inputElement = <input className="input"
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
    }

    return(
        <div className="contact-form_input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
} 

export default input;