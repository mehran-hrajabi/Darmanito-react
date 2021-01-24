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
        showShop : false
    }

    itemToggle = (item) => {
        if(item=="pharmacy"){
            const doesPharmacyShow = this.state.showPharmacy;
            this.setState({showPharmacy: !doesPharmacyShow, showShop: false});            
        }
        else if(item=="shop"){
            const doesShopShow = this.state.showShop;
            this.setState({showShop: !doesShopShow, showPharmacy: false});            
        }
    }

    render(){
        let questionsList = null;
        const pharmacyClass = [], shopClass = [];

        if(this.state.showPharmacy){
            questionsList = <PharmacyContainer /> ;
            pharmacyClass.push('opacityOne');
            shopClass.pop();
            shopClass.push('opacityBlur');
        }
        else if(this.state.showShop){
            questionsList = <ShopContainer /> ;
            shopClass.push('opacityOne');
            pharmacyClass.pop();
            pharmacyClass.push('opacityBlur');
        }

        if(!this.state.showPharmacy && !this.state.showShop){
            questionsList = null;
            pharmacyClass.pop();
            shopClass.pop();
            pharmacyClass.push('opacityBlur');
            shopClass.push('opacityBlur');
        }

        return (
            <div className="faq-body">
                <div>
                    <h4 className="faq_header">سوال شما درباره کدام سرویس هست؟</h4>
                    <div className="faq-items-container">
                        <div className={pharmacyClass} onClick={() => this.itemToggle("pharmacy")}>
                            <Item title="داروخانه" img ={Pharmacy}  />
                        </div>
                        <div className={shopClass} onClick={() => this.itemToggle("shop")}>
                            <Item title="فروشگاه" img ={Shop}  />
                        </div>
                        <div className="opacityBlur">
                            <Item  title="ویزیت آنلاین" img={Visit}>به زودی</Item>
                        </div>
                        <div className="opacityBlur">
                            <Item  title="رزرو آنلاین" img={Reserve}>به زودی</Item>     
                        </div>
                    </div>

                    {questionsList}
                </div>
            </div>
        );
    }
}

export default FAQPageBody;