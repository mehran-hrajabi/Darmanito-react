import React, {Component} from 'react';

import Item from '../TermsPageItem/TermsPageItem';
import Terms from './TermsDescription';

import '../../assets/sass/components/TermsPageBody/_termsPageBody.scss';

class TermsBody extends Component {

    state = {
        showTerms: [true, false, false, false]
    }
    
    termsToggle = (index) => {
        let doesTermShow = [];
        let currentState = this.state.showTerms[index];

        for(var i=0; i<4; i++){
            doesTermShow[i] = this.state.showTerms[i];
        }

        for(i=0; i<4; i++){
            if(i == index){
                doesTermShow[i] = !currentState;
            }
            else {
                doesTermShow[i] = false;
            }
        }
  
        this.setState({showTerms: doesTermShow});
    }

    render(){

        let terms = null;
        if(this.state.showTerms[0]) {terms = Terms.registry;}
        if(this.state.showTerms[1]) {terms = Terms.pharmacy;}
        if(this.state.showTerms[2]) {terms = Terms.shop;}
        if(this.state.showTerms[3]) {terms = Terms.support;}

        return(
            <div className="terms-body">
                <div className="terms-items_container">
                    <div onClick = {() => this.termsToggle(0)}><Item title="قوانین عضویت حساب کاربری" /></div>
                    <div onClick = {() => this.termsToggle(1)}><Item title="قوانین داروخانه" /></div>
                    <div onClick = {() => this.termsToggle(2)}><Item title="قوانین فروشگاه" /></div>
                    <div onClick = {() => this.termsToggle(3)}><Item title="قوانین مشاوره آنلاین" /></div>
                </div>

                <div className="terms-toggle">
                    <p>{terms}</p>
                </div>
            </div>
        );
    }
}

export default TermsBody ;