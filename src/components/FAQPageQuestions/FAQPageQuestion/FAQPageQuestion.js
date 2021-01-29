import React, {Component} from 'react';
import Plus from '../../../assets/img/plus.svg';
import Minus from '../../../assets/img/minus.svg';
import '../../../assets/sass/components/FAQPageQuestions/FAQPageQuestion/_faqPageQuestion.scss';

class FAQPageQuestion extends Component{
    state = {
        showAnswer: false,
        answer: null,
        img: Plus
    }

    answerToggle = () => {
        this.setState(state => {
            if(!state.showAnswer){
                return {
                    answer: <p>{this.props.answer}</p>,
                    img: Minus,
                    showAnswer: !state.showAnswer
                };
            }
            else if(state.showAnswer){
                return{
                    answer: null,
                    img: Plus,
                    showAnswer: !state.showAnswer
                };
            }
        });
    }

    render(){
        return (
            <div className="faq-question_body">
                <div className="faq-question">
                    <img onClick={this.answerToggle} src={this.state.img} alt="نمایش"/>
                    <h5>{this.props.question}</h5>
                </div>
                {this.state.answer}
                <hr />         
            </div>
        );
    }
}

export default FAQPageQuestion;