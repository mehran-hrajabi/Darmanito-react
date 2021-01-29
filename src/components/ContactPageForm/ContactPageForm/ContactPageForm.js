import React, {Component} from 'react';
import Input from '../ContactInput/ContactInput';
import Feedback from '../ContactFormFeedback/ContactFormFeedback';
import '../../../assets/sass/components/ContactPageForm/ContactPageForm/_contactPageForm.scss';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.feedback = null;
    }
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
        },
        showFeedback: false
    }

    inputChangedHandler = (event, inputID) => {
        //Handling input changes and update values
        this.setState(state => {
            const updatedForm = {
                ...state.contactForm
            };
            const updatedElement = {
                ...updatedForm[inputID]
            };
            updatedElement.value = event.target.value;
            updatedForm[inputID] = updatedElement;
            return {
                contactForm: updatedForm
            };
        });
    }

    formValidation = () =>{
        const phonePattern = new RegExp(/^\d+$/);
        const emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        let submittedForm = {
            ...this.state.contactForm
        };
        let nameInput = submittedForm.name;
        let emailPhoneInput = submittedForm.emailPhone;
        let messageInput = submittedForm.message;

        //Set default states for validation if user wants to send message again 
        nameInput.valid = false;
        messageInput.valid = false;
        emailPhoneInput.valid = false;
        
        //Name must be more than 3 characters
        if(nameInput.value.trim().length > 3){
            nameInput.valid = true;
        }
        //Message must be more than 10 characters
        if(messageInput.value.trim().length > 10){
            messageInput.valid = true;
        }
        //Email or phone must match the regular expressions
        if(emailPattern.test(emailPhoneInput.value)){
            emailPhoneInput.valid = true;
        }
        if(phonePattern.test(emailPhoneInput.value) &&
                        (emailPhoneInput.value.length == 11 &&
                            emailPhoneInput.value.slice(1,11) > 9000000000 &&
                            emailPhoneInput.value.slice(0,0) == 0)){
            emailPhoneInput.valid = true;
        }
        //Refresh the form after submission
        if(nameInput.valid && emailPhoneInput.valid && messageInput.valid){
            nameInput.value = "";
            emailPhoneInput.value = "";
            messageInput.value = "";
        }
        this.setState({contactForm: submittedForm, showFeedback: true});
        this.feedback = (
            <Feedback isNameValid={this.state.contactForm.name.valid}
                        isEmailPhoneValid = {this.state.contactForm.emailPhone.valid}
                        isMessageValid = {this.state.contactForm.message.valid} />
        );   
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
            <div className="contact-form">
                {this.feedback}
                {form}
            </div>
        );
    }
}

export default ContactForm;