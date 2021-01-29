import React from 'react';
import Question from '../FAQPageQuestion/FAQPageQuestion';
import FAQ from '../FAQPageText/FAQPageText'
import '../../../assets/sass/components/FAQPageQuestions/FAQPageQuestionsContainer/_faqPageQuestionsContainer.scss';

const FAQPagePharmacyContainer = () => {
    return (
        <div className="faq-questions_container">
            <Question question={FAQ.pharmacyQuestions[0]} answer={FAQ.pharmacyAnswers[0]}></Question>
            <Question question={FAQ.pharmacyQuestions[1]} answer={FAQ.pharmacyAnswers[1]}></Question>
            <Question question={FAQ.pharmacyQuestions[2]} answer={FAQ.pharmacyAnswers[2]}></Question>
            <Question question={FAQ.pharmacyQuestions[3]} answer={FAQ.pharmacyAnswers[3]}></Question>                
        </div>        
    );
}

export default FAQPagePharmacyContainer