import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import Cards from '../../RegistryFormCards/RegistryFormCardContainer';
import Input from '../RegistryFormInput/RegistryFormInput';
import Result from '../RegistryResult/RegistryResult';
import Person from '../../../assets/img/person_icon.svg';
import '../../../assets/sass/components/RegistryForm/RegistryForm/_registryForm.scss';

class RegistryForm extends Component {
    constructor(props){
        super(props);
        this.body = null;
    }
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
                    type: "number",
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
                    type: "number",
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
        successMessage: false,
        redirect: false,
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

    inputChangedHandler = (event, inputID, formID) => {
        let updatedForm;
        switch (formID) {
            case "one":
                updatedForm = {
                    ...this.state.registryForm
                }
                break;
            case "two":
                updatedForm = {
                    ...this.state.registryForm2
                }
                break;
            default:
                break;
        }
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
        this.setState(state=>{
            if(formID==="one"){
                return {registryForm: updatedForm, isFormValid: formValidity};
            }
            else if(formID==="two"){
                return {registryForm2: updatedForm, isForm2Valid: formValidity};
            }
        });
    }

    buttonsHandler = (submit) => {
        this.setState(state => {
            //Go to second step
            if(!state.secondStep && !state.lastStep && !submit){
                return {secondStep: true}
            }
            //Go to last step (Confirmation)
            else if(state.secondStep && !state.lastStep && !submit){
                return {lastStep: true, secondStep: false}
            }
            //Go back to edit
            else if(!state.secondStep && state.lastStep && !submit){
                return {secondStep: false, lastStep: false}
            }
            //Submit form
            else if(submit){
                return{secondStep: false, lastStep: false, successMessage: true, redirect: true}
            }
            else{
                return state;
            }
        });
    }

    componentDidUpdate(){
        //Redirect to home page
        if(this.state.redirect){
            setTimeout(()=>{
                let history = createBrowserHistory();
                history.goBack();
            }, 5000);
        }
    }

    render(){
        //First step
        if(!this.state.secondStep && !this.state.lastStep){
            let formElementsArray = [];
            for(let key in this.state.registryForm){
                formElementsArray.push({
                    id: key,
                    config: this.state.registryForm[key]
                });
            }
            this.body = (
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
                            changed = {(event) => this.inputChangedHandler(event, formElement.id, "one")} />
                    ))}
                    <button className="register-btn" disabled={!this.state.isFormValid}
                    onClick={() => this.buttonsHandler(false)} type="button">مرحله بعد</button>
                </form>
            );
        }

        //Second step
        if(this.state.secondStep){
            let form2ElementsArray = [];
            for(let key in this.state.registryForm2){
                form2ElementsArray.push({
                    id: key,
                    config: this.state.registryForm2[key]
                });
            }
            this.body = (
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
                            changed = {(event) => this.inputChangedHandler(event, formElement.id, "two")} />
                    ))}
                    <button className="register-btn" disabled={!this.state.isForm2Valid}
                    onClick={() => this.buttonsHandler(false)} type="button">تکمیل ثبت نام</button>
                </form>
            );
        }

        //Confirmation step
        if(this.state.lastStep){
            this.body = (
                <Result name = {this.state.registryForm.name.value}
                    medNumber = {this.state.registryForm.medicalNumber.value}
                    pharName = {this.state.registryForm.pharmacyName.value}
                    pharNumber = {this.state.registryForm.pharmacyNumber.value}
                    city = {this.state.registryForm2.city.value}
                    region = {this.state.registryForm2.region.value}
                    address = {this.state.registryForm2.address.value}
                    shift = {this.state.registryForm2.shift.value}
                    submit = {() => this.buttonsHandler(true)}
                    back = {() => this.buttonsHandler(false)} />
            );
        }

        //Success message
        if(this.state.successMessage){
            this.body = <div className="registry-form"><p>ثبت نام با موفقیت انجام شد.</p></div>;
        }

        return(
            <div className="registry-form_container">
                {this.body}
                <Cards title={this.state.registryForm.pharmacyName.value}
                name={this.state.registryForm.pharmacyName.value}>{Person}</Cards>
            </div>
        );
    }
}

export default RegistryForm;