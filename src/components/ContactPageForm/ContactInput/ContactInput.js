import React from 'react';
import '../../../assets/sass/components/ContactPageForm/ContactFormInput/_contactFormInput.scss';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case('input') :
            inputElement = <input className="contact-input"
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
            break;
        case('textarea') :
            inputElement = <textarea className="contact-textarea"
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
            break;
        default :
            inputElement = <input className="contact-input"
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

export default Input;