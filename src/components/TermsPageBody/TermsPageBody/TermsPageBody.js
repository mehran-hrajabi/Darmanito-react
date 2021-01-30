import React, {Component} from 'react';
import Item from '../../TermsPageItem/TermsPageItem';
import Terms from '../TermsDescription/TermsDescription';
import '../../../assets/sass/components/TermsPageBody/_termsPageBody.scss' ;

class TermsBody extends Component {
    state = {
        registryTerms:true,
        pharmacyTerms: false,
        shopTerms: false,
        supportTerms: false,
        registryClass:"opacityOne",
        pharmacyClass: "opacityBlur",
        shopClass: "opacityBlur",
        supportClass: "opacityBlur",
        terms: Terms.registry
    }
    
    termsToggle = (index) => {
        switch(index){
            case("registry"):
                this.setState(state => {
                    if(!state.registryTerms){
                        return{
                            registryTerms: !state.registryTerms, registryClass: "opacityOne", terms: Terms.registry,
                            pharmacyTerms: false, shopTerms: false, supportTerms: false,
                            pharmacyClass: "opacityBlur", shopClass: "opacityBlur", supportClass: "opacityBlur"
                        };
                    }
                });
            break;
            case("pharmacy"):
                this.setState(state => {
                    if(!state.pharmacyTerms){
                        return{
                            pharmacyTerms: !state.pharmacyTerms, pharmacyClass: "opacityOne", terms: Terms.pharmacy,
                            registryTerms: false, shopTerms: false, supportTerms: false,
                            registryClass: "opacityBlur", shopClass: "opacityBlur", supportClass: "opacityBlur"
                        };
                    }
                });
            break;
            case("shop"):
                this.setState(state => {
                    if(!state.shopTerms){
                        return{
                            shopTerms: !state.shopTerms, shopClass: "opacityOne", terms: Terms.shop,
                            registryTerms: false, pharmacyTerms: false, supportTerms: false,
                            registryClass: "opacityBlur", pharmacyClass: "opacityBlur", supportClass: "opacityBlur"
                        };
                    }
                });
            break;
            case("support"):
                this.setState(state => {
                    if(!state.supportTerms){
                        return{
                            supportTerms: !state.supportTerms, supportClass: "opacityOne", terms: Terms.support,
                            registryTerms: false, pharmacyTerms: false, shopTerms: false,
                            registryClass: "opacityBlur", pharmacyClass: "opacityBlur", shopClass: "opacityBlur"
                        };
                    }
                });
            break;            
        }
    }

    render(){
        return(
            <div className="terms-body">
                <h4>کاربران باید این توافق نامه را مطالعه و سپس اقدام به عضویت و ... نمایند</h4>

                <div className="terms-items_container">
                    <div>
                        <div className={this.state.registryClass} onClick = {() => this.termsToggle("registry")}>
                            <Item title="قوانین عضویت حساب کاربری" />
                        </div>
                        <div className={this.state.pharmacyClass} onClick = {() => this.termsToggle("pharmacy")}>
                            <Item title="قوانین داروخانه" />
                        </div>                        
                    </div>

                    <div>
                        <div className={this.state.shopClass} onClick = {() => this.termsToggle("shop")}>
                            <Item title="قوانین فروشگاه" />
                        </div>
                        <div className={this.state.supportClass} onClick = {() => this.termsToggle("support")}>
                            <Item title="قوانین مشاوره آنلاین" />
                        </div>                        
                    </div>
                </div>

                <div className="terms-toggle">
                    <p>{this.state.terms}</p>
                </div>
            </div>
        );
    }
}

export default TermsBody ;