import React, {Component} from 'react';
import Item from '../../TermsPageItem/TermsPageItem';
import Terms from '../TermsDescription/TermsDescription';
import '../../../assets/sass/components/TermsPageBody/_termsPageBody.scss' ;

class TermsBody extends Component {
    state = {
        registryTerms:true,
        pharmacyTerms: false,
        shopTerms: false,
        supportTerms: false
    }
    
    termsToggle = (index) => {
        switch(index){
            case("registry"):
                this.setState(state => ({
                    registryTerms: !state.registryTerms,
                    pharmacyTerms: false, shopTerms: false, supportTerms: false
                }));
            break;
            case("pharmacy"):
                this.setState(state => ({
                    pharmacyTerms: !state.pharmacyTerms,
                    registryTerms: false, shopTerms: false, supportTerms: false
                }));
            break;
            case("shop"):
                this.setState(state => ({
                    shopTerms: !state.shopTerms,
                    registryTerms: false, pharmacyTerms: false, supportTerms: false
                }));
            break;
            case("support"):
                this.setState(state => ({
                    supportTerms: !state.supportTerms,
                    registryTerms: false, pharmacyTerms: false, shopTerms: false
                }));
            break;            
        }
    }

    render(){
        let terms = null;
        let classes = ["opacityBlur", "opacityBlur", "opacityBlur", "opacityBlur"];
        if(this.state.registryTerms) {
            terms = Terms.registry;
            classes = ["opacityOne", "opacityBlur", "opacityBlur", "opacityBlur"];
        }
        else if(this.state.pharmacyTerms) {
            terms = Terms.pharmacy;
            classes = ["opacityBlur", "opacityOne", "opacityBlur", "opacityBlur"];
        }
        else if(this.state.shopTerms) {
            terms = Terms.shop;
            classes = ["opacityBlur", "opacityBlur", "opacityOne", "opacityBlur"];
        }
        else if(this.state.supportTerms) {
            terms = Terms.support;
            classes = ["opacityBlur", "opacityBlur", "opacityBlur", "opacityOne"];
        }

        return(
            <div className="terms-body">
                <h4>کاربران باید این توافق نامه را مطالعه و سپس اقدام به عضویت و ... نمایند</h4>

                <div className="terms-items_container">
                    <div>
                        <div className={classes[0]} onClick = {() => this.termsToggle("registry")}>
                            <Item title="قوانین عضویت حساب کاربری" />
                        </div>
                        <div className={classes[1]} onClick = {() => this.termsToggle("pharmacy")}>
                            <Item title="قوانین داروخانه" />
                        </div>                        
                    </div>

                    <div>
                        <div className={classes[2]} onClick = {() => this.termsToggle("shop")}>
                            <Item title="قوانین فروشگاه" />
                        </div>
                        <div className={classes[3]} onClick = {() => this.termsToggle("support")}>
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