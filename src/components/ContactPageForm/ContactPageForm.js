import React, {Component} from 'react';
import Input from './ContactInput';
import '../../assets/sass/components/ContactPageForm/_contactPageForm.scss';

class ContactForm extends Component {

    state = {
        contactForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "نام و نام خانوادگی خود را وارد کنید"
                },
                value: "",
                label: "نام و نام خانوادگی",
                validationRules: {
                    required: true,
                    minLength: 3,
                    maxLength: 20
                },
                valid: false
            },

            emailPhone: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ایمیل یا شماره همراه خود را وارد کنید"
                },
                value: "",
                label: "ایمیل یا شماره همراه",
                validationRules: {
                    required: true,
                    minLength: 7,
                    maxLength: 30
                },
                valid: false
            },

            message: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "پیام خود را بنویسید"
                },
                value: "",
                label: "پیام شما",
                validationRules: {
                    required: true,
                    minLength: 10,
                    maxLength: 150
                },
                valid: false
            }
        }            
    }

    formValidation = (value, rules) => {
        let isValid = false;

        if(rules.required){
            isValid = value.trim() !== '' && isValid ;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
    }

    inputChangedHandler = (event, inputID) => {
        const updatedForm = {
            ...this.state.contactForm
        };
        const updatedElement = {
            ...updatedForm[inputID]
        };
        updatedElement.value = event.target.value;
        updatedElement.valid = this.formValidation(updatedElement.value, updatedElement.validationRules);
        updatedForm[inputID] = updatedElement;
        this.setState({contactForm: updatedForm});
    }

    render(){
            
        let formElementsArray = [];
        for(let key in this.state.contactForm){
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        label = {formElement.config.label}
                        changed = {(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button type="button">ارسال پیام</button>
            </form>
        );


        return(
            <div className="contact-form">{form}</div>
        );
    }
}

export default ContactForm;