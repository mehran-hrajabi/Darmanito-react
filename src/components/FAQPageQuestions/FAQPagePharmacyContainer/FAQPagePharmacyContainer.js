import React from 'react';
import Question from '../FAQPageQuestion/FAQPageQuestion';
import '../../../assets/sass/components/FAQPageQuestions/FAQPageQuestionsContainer/_faqPageQuestionsContainer.scss';

const FAQPagePharmacyContainer = () => {

    let pharmacyQuestions = ["هزینه ای درمانیتو برای پیدا کردن دارو دریافت می کنه؟",
                             "هزینه ای درمانیتو برای پیدا کردن دارو دریافت می کنه؟",
                             "درمانیتو فقط در تهران و کرج فعال هست؟",
                             "هزینه ای درمانیتو برای پیدا کردن دارو دریافت می کنه؟"];

    let pharmacyAnswers = ["بله",
                            "بله",
                            "خیر. ما هم اکنون در تهران در حال فعالیت هستیم.",
                            "بله"];

    let pharmacyContainer = (
        <div className="faq-questions_container">
            <Question question={pharmacyQuestions[0]} answer={pharmacyAnswers[0]}></Question>
            <Question question={pharmacyQuestions[1]} answer={pharmacyAnswers[1]}></Question>
            <Question question={pharmacyQuestions[2]} answer={pharmacyAnswers[2]}></Question>
            <Question question={pharmacyQuestions[3]} answer={pharmacyAnswers[3]}></Question>                
        </div>                
    );

    return <div>{pharmacyContainer}</div> ;
}

export default FAQPagePharmacyContainer;