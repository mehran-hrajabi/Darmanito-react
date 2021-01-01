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
                label: "نام و نام خانوادگی"
            },

            emailPhone: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ایمیل یا شماره همراه خود را وارد کنید"
                },
                value: "",
                label: "ایمیل یا شماره همراه"
            },

            message: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "پیام خود را بنویسید"
                },
                value: "",
                label: "پیام شما"
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