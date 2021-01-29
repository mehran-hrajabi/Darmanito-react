import React, { Component } from 'react';
import RegistryInput from '../UI/RegistryInput/RegistryInput';
import Modal from '../UI/Modal/Modal';
import '../../assets/sass/components/AboutPageInfo/_aboutPageInfo.scss';

class AboutInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            isValid: false
        };
        this.modal = null;
    }

    phoneValidation = (event) => {
        let number = event.target.value;
        if(number.length == 11 && number.slice(1,11) > 9000000000 && number.slice(0,0) == 0){
            this.setState({isValid: true});
        }
        else{
            this.setState({isValid: false});
        }
    }
    showModal = () => {
        if(this.state.isValid){
            this.setState({showModal: true});
            this.modal = (
                <Modal show={this.state.showModal} title="ثبت نام با موفقیت انجام شد"
                txt="با شما تماس خواهیم گرفت">
                    <button onClick={this.closeModal}>برگشت</button>
                </Modal>
            );
        }
    }
    closeModal = () => {
        this.setState({showModal: false, isValid: false});
        this.modal = null;
    }

    render(){
        return(
            <div className="about-info">
                {this.modal}
                <h2>شما هم در سلامت و بهبود مردم کشورمون موثر باشید.</h2>
                <p>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید
                    و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید. </p>

                <RegistryInput clicked={this.showModal} isValid={this.state.isValid} validation={this.phoneValidation} />
            </div>
        );        
    }
}

export default AboutInfo;