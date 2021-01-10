import React, {Component} from 'react';
import Plus from '../../assets/img/plus.svg';
import Minus from '../../assets/img/minus.svg';
import '../../assets/sass/components/FAQPageQuestions/_faqPageQuestion.scss';

class FAQPageQuestion extends Component{
    state = {
        showAnswer: false
    }

    answerToggle = () => {
        const doesAnswerShow = this.state.showAnswer;
        this.setState({showAnswer: !doesAnswerShow});
    }

    render(){
        
        let answer = null;
        let minusPlus = <img onClick = {this.answerToggle} src = {Plus} /> ;
        if(this.state.showAnswer){
            answer = <p>{this.props.answer}</p> ;
            minusPlus = <img onClick = {this.answerToggle} src = {Minus} /> ;
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