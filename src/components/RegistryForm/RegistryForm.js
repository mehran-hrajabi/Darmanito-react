import React, {Component} from 'react';
import Cards from '../RegistryFormCards/RegistryFormCardContainer';
import Input from './RegistryFormInput';
import Result from './RegistryResult';
import Person from '../../assets/img/person_icon.svg';
import '../../assets/sass/components/RegistryForm/_registryForm.scss';

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
                label: "شماره داروخانه (به همراه کد شهر)",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    numberRegExp: /^\d+$/ ,
                    phone: true
                }
            }
        },

        registryForm2: {
            city: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: 'تهران', displayValue: 'تهران'},
                        {value: 'البرز', displayValue: 'البرز'}
                    ]
                },
                label: "شهر",
                value: "تهران",
                valid: true,
                validationRules: {}
            },
            region: {
                elementType: "input",
                elementConfig: {
                    type: "number",
                    min:"1",
                    max:"30"
                },
                label: "منطقه",
                value: "1",
                valid: true,
                validationRules: {}
            },
            address: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "آدرس دقیق را وارد کنید"
                },
                label: "آدرس دقیق",
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    minLength: 20
                }
            },
            shift: {
                elementType: "input",
                elementConfig: {
                    type: "radio",
                    name: "shift",
                    options: [
                        {value: 'روزانه ', label: 'روزانه'},
                        {value: 'شبانه روزی ', label: 'شبانه روزی'}
                    ]
                },
                value: "",
                valid: true,
                validationRules: {}
            }
        },
        isFormValid: false,
        isForm2Valid: false,
        secondStep: false,
        lastStep: false,
        successMessage: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(!rules){
            return true;
        }
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
            isValid = value.length == 11 && value.slice(1,11) > 1000000000 && value.slice(0,0) == 0 && isValid;
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
    inputChangedHandler2 = (event, inputID) => {
        //Handling input changes and update values
        const updatedForm2 = {
            ...this.state.registryForm2
        };
        const updatedElement2 = {
            ...updatedForm2[inputID]
        };
        updatedElement2.value = event.target.value;
        //Check input validity
        updatedElement2.valid = this.checkValidity(updatedElement2.value, updatedElement2.validationRules);

        updatedForm2[inputID] = updatedElement2;
        //Check overall form validity
        let formValidity = true;
        for(let inputID in updatedForm2){
            formValidity = updatedForm2[inputID].valid && formValidity;
        }
        this.setState({registryForm2: updatedForm2, isForm2Valid: formValidity});
    }

    buttonHandler = () => {
        let isSecondStep = this.state.secondStep;
        let isLastStep = this.state.lastStep;

        //Go to step 2
        if(!isSecondStep && !isLastStep){
            this.setState({secondStep: !isSecondStep});
        }
        //Go to results
        if(isSecondStep && !isLastStep){
            this.setState({lastStep: !isLastStep});
        }
        //Go back to edit inputs
        if(isSecondStep && isLastStep){
            this.setState({secondStep: !isSecondStep, lastStep: !isLastStep});
        }
    }
    submit = () =>{
        let isSecondStep = this.state.secondStep;
        let isLastStep = this.state.lastStep;
        let isSuccessful = this.state.successMessage;
        this.setState({secondStep: !isSecondStep, lastStep: !isLastStep, successMessage: !isSuccessful});
    }

    render(){
        let formElementsArray = [];
        for(let key in this.state.registryForm){
            formElementsArray.push({
                id: key,
                config: this.state.registryForm[key]
            })
        }
        let form2ElementsArray = [];
        for(let key in this.state.registryForm2){
            form2ElementsArray.push({
                id: key,
                config: this.state.registryForm2[key]
            })
        }

        let form = (
            <form className="registry-form">
                <h5>عضویت به عنوان داروخانه</h5>
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
                <button className="register-btn" disabled={!this.state.isFormValid}
                onClick={this.buttonHandler} type="button">مرحله بعد</button>
            </form>
        );
        let form2 = (
            <form className="registry-form">
                <h5>عضویت به عنوان داروخانه</h5>
                {form2ElementsArray.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        valid = {formElement.config.valid}
                        label = {formElement.config.label}
                        changed = {(event) => this.inputChangedHandler2(event, formElement.id)} />
                ))}
                <button className="register-btn" disabled={!this.state.isForm2Valid}
                onClick={this.buttonHandler} type="button">تکمیل ثبت نام</button>
            </form>
        );
        let result = (
            <Result name = {this.state.registryForm.name.value}
            medNumber = {this.state.registryForm.medicalNumber.value}
            pharName = {this.state.registryForm.pharmacyName.value}
            pharNumber = {this.state.registryForm.pharmacyNumber.value}
            city = {this.state.registryForm2.city.value}
            region = {this.state.registryForm2.region.value}
            address = {this.state.registryForm2.address.value}
            shift = {this.state.registryForm2.shift.value}
            submit = {this.submit}
            back = {this.buttonHandler} />
        );
        let success = <div className="registry-form"><p>ثبت نام با موفقیت انجام شد.</p></div>
        
        //Multi step form
        let body = form;
        let pharmacyName = "نام داروخانه شما";
        let pharmacyName2 = "شما";
        if(this.state.secondStep){
            body = form2;
            pharmacyName = this.state.registryForm.pharmacyName.value;
            pharmacyName2 = pharmacyName;
        }
        if(this.state.lastStep){
            body = result;
        }
        if(this.state.successMessage){
            body = success;
            pharmacyName = this.state.registryForm.pharmacyName.value;
            pharmacyName2 = pharmacyName;
        }

        return(
            <div className="registry-form_container">
                {body}
                <Cards title={pharmacyName} name={pharmacyName2}>{Person}</Cards>
            </div>
        );
    }
}

export default RegistryFormOne;