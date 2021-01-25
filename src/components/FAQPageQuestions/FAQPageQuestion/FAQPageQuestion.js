import React, {Component} from 'react';
import Plus from '../../../assets/img/plus.svg';
import Minus from '../../../assets/img/minus.svg';
import '../../../assets/sass/components/FAQPageQuestions/FAQPageQuestion/_faqPageQuestion.scss';

class FAQPageQuestion extends Component{
    state = {
        showAnswer: false
    }

    answerToggle = () => {
        this.setState(state => ({
            showAnswer: !state.showAnswer
        }));
    }

    render(){
        let answer = null;
        let minusPlus = <img onClick={this.answerToggle} src={Plus} alt="نمایش"/> ;
        if(this.state.showAnswer){
            answer = <p>{this.props.answer}</p> ;
            minusPlus = <img onClick={this.answerToggle} src={Minus} alt="پنهان" /> ;
        }

        return (
            <div className="faq-question_body">
                <div className="faq-question">
                    {minusPlus}
                    <h5>{this.props.question}</h5>
                </div>
                {answer}
                <hr />         
            </div>
        );
    }
}

export default FAQPageQuestion;