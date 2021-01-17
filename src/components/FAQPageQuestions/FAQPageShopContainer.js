import React from 'react';
import Question from './FAQPageQuestion';
import '../../assets/sass/components/FAQPageQuestions/_faqPageQuestionsContainer.scss';

const FAQShopContainer = () => {
    let shopQuestions = ["آیا فروشگاه درمانیتو راه اندازی شده است؟",
                         "آیا فروشگاه درمانیتو راه اندازی شده است؟",
                         "امکان سفارش از فروشگاه درمانیتو فقط در تهران و کرج وجود داره؟",
                         "آیا فروشگاه درمانیتو راه اندازی شده است؟"];

    let shopAnswers = ["بله",
                        "بله",
                        "خیر. امکان سفارش از فروشگاه درمانیتو در سراسر کشور وجود دارد.",
                        "بله"];

    let shopContainer = (
        <div className="faq-questions_container">
            <Question question={shopQuestions[0]} answer={shopAnswers[0]}></Question>
            <Question question={shopQuestions[1]} answer={shopAnswers[1]}></Question>
            <Question question={shopQuestions[2]} answer={shopAnswers[2]}></Question>
            <Question question={shopQuestions[3]} answer={shopAnswers[3]}></Question>                     
        </div>
    );

    return <div>{shopContainer}</div>
}

export default FAQShopContainer;