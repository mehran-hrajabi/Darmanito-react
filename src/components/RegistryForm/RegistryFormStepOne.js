import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cards from '../RegistryFormCards/RegistryFormCardContainer';
import Input from './RegistryFormInput';
import Person from '../../assets/img/person_icon.svg';
import '../../assets/sass/components/RegistryForm/_registryFormStepOne.scss';

class RegistryFormOne extends Component {
    state = {
        registryForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "نام و نام خانوادگی موسس را وارد نمایید"
                },
                label: "نام و نام خانوادگی موسس",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    minLength: 3
                }
            },

            medicalNumber: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "فقط بخش عددی را وارد کنید"
                },
                label: "شماره نظام پزشکی(فقط عدد)",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    numberRegExp: /^\d+$/
                }
            },

            pharmacyName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "نام داروخانه شما در اپلیکیشن"
                },
                label: "نام داروخانه / فروشگاه",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    minLength: 3
                }
            },

            pharmacyNumber: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "به عنوان اطلاعات تماس به کاربر نشان داده می شود"
                },
                label: "شماره داروخانه",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    numberRegExp: /^\d+$/ ,
                    phone: true
                }
            }
        },
        isFormValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.trim().length >= rules.minLength && isValid;
        }
        if(rules.numberRegExp){
            const numberPattern = new RegExp(rules.numberRegExp);
            isValid = numberPattern.test(value.trim()) && isValid;
        }
        if(rules.phone){
            isValid = value.length == 11 && value.slice(1,11) > 9000000000 && value.slice(0,0) == 0 && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputID) => {
        //Handling input changes and update values
        const updatedForm = {
            ...this.state.registryForm
        };
        const updatedElement = {
            ...updatedForm[inputID]
        };
        updatedElement.value = event.target.value;
        //Check input validity
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validationRules);

        updatedForm[inputID] = updatedElement;
        //Check overall form validity
        let formValidity = true;
        for(let inputID in updatedForm){
            formValidity = updatedForm[inputID].valid && formValidity;
        }
        this.setState({registryForm: updatedForm, isFormValid: formValidity});
    }

    render(){
        let formElementsArray = [];
        for(let key in this.state.registryForm){
            formElementsArray.push({
                id: key,
                config: this.state.registryForm[key]
            })
        }

        let form = (
            <form className="registry-form">
                <h4>عضویت به عنوان داروخانه</h4>
                {formElementsArray.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        valid = {formElement.config.valid}
                        label = {formElement.config.label}
                        changed = {(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className="register-btn" disabled={!this.state.isFormValid} type="button">
                    مرحله بعد
                </button>
            </form>
        );

        return(
            <div className="registry-form_container">
                {form}
                {/*<Cards title="نام داروخانه شما" name="شما">{Person}</Cards>*/}
            </div>
        );
    }
}

/*const mapStateToProps = state => {
    return {
        registryFormCopy: state.registryForm,
        isFormValidCopy: state.isFormValid
    };
}

const mapDispatchToProps = dispatch => {
    return{
        changedHandlerDispatch: () => dispatch({type: CHANGED_HANDLER}),
        validationDispatch: () => dispatch({type: CHECK_VALIDITY})
    };
}*/

//export default connect(mapStateToProps, mapDispatchToProps)(RegistryFormOne);
export default RegistryFormOne;