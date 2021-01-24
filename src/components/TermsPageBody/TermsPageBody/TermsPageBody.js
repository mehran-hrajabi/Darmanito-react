import React, {Component} from 'react';
import Item from '../../TermsPageItem/TermsPageItem';
import Terms from '../TermsDescription/TermsDescription';
import '../../../assets/sass/components/TermsPageBody/_termsPageBody.scss' ;

class TermsBody extends Component {
    state = {
        showTerms: [true, false, false, false],
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
        let classes = ["opacityBlur", "opacityBlur", "opacityBlur", "opacityBlur"];
        if(this.state.showTerms[0]) {
            terms = Terms.registry;
            classes = ["opacityOne", "opacityBlur", "opacityBlur", "opacityBlur"];
        }
        else if(this.state.showTerms[1]) {
            terms = Terms.pharmacy;
            classes = ["opacityBlur", "opacityOne", "opacityBlur", "opacityBlur"];
        }
        else if(this.state.showTerms[2]) {
            terms = Terms.shop;
            classes = ["opacityBlur", "opacityBlur", "opacityOne", "opacityBlur"];
        }
        else if(this.state.showTerms[3]) {
            terms = Terms.support;
            classes = ["opacityBlur", "opacityBlur", "opacityBlur", "opacityOne"];
        }

        return(
            <div className="terms-body">
                <h4>کاربران باید این توافق نامه را مطالعه و سپس اقدام به عضویت و ... نمایند</h4>

                <div className="terms-items_container">
                    <div>
                        <div className={classes[0]} onClick = {() => this.termsToggle(0)}>
                            <Item title="قوانین عضویت حساب کاربری" />
                        </div>
                        <div className={classes[1]} onClick = {() => this.termsToggle(1)}>
                            <Item title="قوانین داروخانه" />
                        </div>                        
                    </div>

                    <div>
                        <div className={classes[2]} onClick = {() => this.termsToggle(2)}>
                            <Item title="قوانین فروشگاه" />
                        </div>
                        <div className={classes[3]} onClick = {() => this.termsToggle(3)}>
                            <Item title="قوانین مشاوره آنلاین" />
                        </div>                        
                    </div>
                </div>

                <div className="terms-toggle">
                    <p>{terms}</p>
                </div>
            </div>
        );
    }
}

export default TermsBody ;