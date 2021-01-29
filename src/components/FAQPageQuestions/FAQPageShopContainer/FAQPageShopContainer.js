import React from 'react';
import Question from '../FAQPageQuestion/FAQPageQuestion';
import FAQ from '../FAQPageText/FAQPageText'
import '../../../assets/sass/components/FAQPageQuestions/FAQPageQuestionsContainer/_faqPageQuestionsContainer.scss';

const FAQShopContainer = () => {
    return (
        <div className="faq-questions_container">
            <Question question={FAQ.shopQuestions[0]} answer={FAQ.shopAnswers[0]}></Question>
            <Question question={FAQ.shopQuestions[1]} answer={FAQ.shopAnswers[1]}></Question>
            <Question question={FAQ.shopQuestions[2]} answer={FAQ.shopAnswers[2]}></Question>
            <Question question={FAQ.shopQuestions[3]} answer={FAQ.shopAnswers[3]}></Question>                     
        </div>
    );
}

export default FAQShopContainer;