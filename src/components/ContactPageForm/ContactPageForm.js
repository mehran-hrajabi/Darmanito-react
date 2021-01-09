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
                valid: false
            },

            message: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "پیام خود را بنویسید"
                },
                value: "",
                label: "پیام شما",
                valid: false
            }
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
        updatedForm[inputID] = updatedElement;
        this.setState({contactForm: updatedForm});
    }

    formValidation = () =>{
        let submittedForm = {
            ...this.state.contactForm
        };

        let nameInput = submittedForm.name;
        let emailPhoneInput = submittedForm.emailPhone;
        let messageInput = submittedForm.message;
        const phonePattern = new RegExp(/^\d+$/);
        const emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

        
        if(nameInput.value.trim().length > 3){
            nameInput.valid = true;
        }
        if(messageInput.value.trim().length > 10){
            messageInput.valid = true;
        }
        if(emailPattern.test(emailPhoneInput.value)){
            emailPhoneInput.valid = true;
        }
        else if(phonePattern.test(emailPhoneInput.value) &&
                        (emailPhoneInput.value.length == 11 &&
                            emailPhoneInput.value.slice(1,11) > 9000000000 &&
                            emailPhoneInput.value.slice(0,0) == 0)){
            emailPhoneInput.valid = true;
        }
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
                <button onClick={this.formValidation} type="button">ارسال پیام</button>
            </form>
        );

        return(
            <div className="contact-form">{form}</div>
        );
    }
}

export default ContactForm;