import React, {Component} from 'react';
import '../../assets/sass/components/ContactPageForm/_contactPageForm.scss';

class ContactForm extends Component {
    render(){
        return(
            <div className="contact-form">
                <form>
                    <div className="contact-form_element">
                        <label for="name">نام و نام خانوادگی</label>
                        <input  id="name" type="text"
                        placeholder="نام و نام خانوادگی خود را وارد کنید" />
                    </div>

                    <div className="contact-form_element">
                        <label for="email_phone">ایمیل یا شماره همراه</label>
                        <input id="email_phone" type="text"
                        placeholder="ایمیل یا شماره همراه خود را وارد کنید" />
                    </div>

                    <div className="contact-form_element">
                        <label for="message">پیام شما</label>
                        <textarea id="message" className="contact-form_element"
                        placeholder="پیام خود را بنویسید" ></textarea>
                    </div>

                    <button type="button">ارسال پیام</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;