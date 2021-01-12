import React from 'react';
import '../../assets/sass/components/RegistryForm/_registryFormInput.scss';

const input = (props) => {
    let inputElement = null;
    let inputClass = "invalid-input";

    if(props.valid){
        inputClass = "valid-input";
    }

    switch (props.elementType) {
        case('input') :
            inputElement = <input className={inputClass}
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
            break;
        default :
            inputElement = <input className={inputClass}
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed} />
    }

    return(
        <div className="registry-form_input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
} 

export default input;