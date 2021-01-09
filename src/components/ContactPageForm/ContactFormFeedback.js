import React from 'react';
import '../../assets/sass/components/ContactPageForm/_contactFormFeedback.scss';

const feedback = (props) => {
    let feedbackMessage = null;
    let feedbackClass = "hide";

    if(props.isNameValid && props.isEmailPhoneValid && props.isMessageValid) {
        feedbackMessage = "پیام شما با موفقیت ارسال شد.";
        feedbackClass = "confirm";
    }
    else if(!props.isNameValid){
        feedbackMessage = "لطفا یک نام و نام خانوادگی معتبر وارد کنید.";
        feedbackClass = "error";
    }
    else if(!props.isEmailPhoneValid){
        feedbackMessage = "لطفا یک ایمیل یا شماره همراه معتبر وارد کنید.";
        feedbackClass = "error";
    }
    else if(!props.isMessageValid){
        feedbackMessage = "پیام شما باید بیش از ده کاراکتر باشد.";
        feedbackClass = "error";
    }

    return(
        <div className={feedbackClass}>
            <p>{feedbackMessage}</p>
        </div>
    );
}

export default feedback;