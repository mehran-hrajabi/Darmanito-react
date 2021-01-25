import React from 'react';
import '../../../assets/sass/components/RegistryForm/RegistryFormInput/_registryFormInput.scss';

const Input = (props) => {
    let inputElement = null;
    let inputClass = "invalid-input";

    //Assign special classes to inputs
    if(props.valid) inputClass = "valid-input";
    if(props.label === "منطقه") inputClass="registry-form_region";

    switch (props.elementType) {
        case('input') :
            if(props.elementConfig.type === "radio"){
                inputElement =
                <div className="registry-form_radio">
                    {props.elementConfig.options.map(option => (
                    <div>
                        <input key={option.value} value={option.value} onChange={props.changed}
                            type={props.elementConfig.type} name={props.elementConfig.name} />
                        <label key={option.label}>{option.label}</label>
                    </div>
                    ))}             
                </div>
            }
            else{
                inputElement = 
                <div className="registry-form_input">
                    <label key={props.label}>{props.label}</label>
                    <input className={inputClass} {...props.elementConfig} value={props.value}
                    onChange={props.changed} />                    
                </div>
            }
        break;

        case('select') :
            inputElement =
            <div className="registry-form_input">
                <label key={props.label}>{props.label}</label>
                <select {...props.elementConfig} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                    ))}
                </select>                
            </div>
        break;            

        default :
            inputElement = 
            <div className="registry-form_input">
                <label key={props.label}>{props.label}</label>
                <input className={inputClass} {...props.elementConfig} value={props.value}
                onChange = {props.changed} />                    
            </div>
    }

    return <div>{inputElement}</div> ;
} 

export default Input;