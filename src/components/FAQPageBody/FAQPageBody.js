import React, {Component} from 'react';
import Item from '../FAQPageItem/FAQPageItem';
import PharmacyContainer from '../FAQPageQuestions/FAQPagePharmacyContainer/FAQPagePharmacyContainer';
import ShopContainer from '../FAQPageQuestions/FAQPageShopContainer/FAQPageShopContainer';
import Pharmacy from '../../assets/img/pharmacy_icon.svg';
import Shop from '../../assets/img/shop_icon.svg';
import Visit from '../../assets/img/visit_icon.svg';
import Reserve from '../../assets/img/reserve_icon.svg';
import '../../assets/sass/components/FAQPageBody/_faqPageBody.scss';

class FAQPageBody extends Component{
    state = {
        showPharmacy: true,
        showShop : false,
        pharmacyClass: "opacityOne",
        shopClass: "opacityBlur",
        questionsList: <PharmacyContainer />
    }

    itemToggle = (item) => {
        if(item=="pharmacy"){
            this.setState(state => {
                if(!state.showPharmacy){
                    return{
                        showPharmacy: !state.showPharmacy,
                        showShop: false,
                        pharmacyClass: "opacityOne",
                        shopClass: "opacityBlur",
                        questionsList: <PharmacyContainer />
                    };
                }
                else{
                    return state;
                }
            });
        }
        else if(item=="shop"){
            this.setState(state => {
                if(!state.showShop){
                    return{
                        showShop: !state.showShop,
                        showPharmacy: false,
                        shopClass: "opacityOne",
                        pharmacyClass: "opacityBlur",
                        questionsList: <ShopContainer />
                    };
                }
                else{
                    return state;
                }
            });
        }
    }

    render(){
        return (
            <div className="faq-body">
                <div>
                    <h4 className="faq_header">سوال شما درباره کدام سرویس هست؟</h4>
                    <div className="faq-items-container">
                        <div className={this.state.pharmacyClass} onClick={() => this.itemToggle("pharmacy")}>
                            <Item title="داروخانه" img ={Pharmacy} alt="داروخانه" />
                        </div>
                        <div className={this.state.shopClass} onClick={() => this.itemToggle("shop")}>
                            <Item title="فروشگاه" img ={Shop} alt="فروشگاه" />
                        </div>
                        <div className="opacityBlur">
                            <Item  title="ویزیت آنلاین" alt="ویزیت آنلاین" img={Visit} >به زودی</Item>
                        </div>
                        <div className="opacityBlur">
                            <Item  title="رزرو آنلاین" alt ="رزرو آنلاین" img={Reserve}>به زودی</Item>     
                        </div>
                    </div>

                    {this.state.questionsList}
                </div>
            </div>
        );
    }
}

export default FAQPageBody;